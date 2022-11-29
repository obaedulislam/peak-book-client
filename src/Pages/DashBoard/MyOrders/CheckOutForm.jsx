import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ book }) => {

    const { _id, bookTitle, bookPrice, userName, email } = book;

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [success, setSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    //Load Payment Data
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:4500/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ bookPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [bookPrice]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymantIntent } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        }

        setSuccess('')
        setProcessing(true)

        //Confirm Payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );


        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }

        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            const payment = {
                bookTitle,
                bookPrice,
                transactionId: paymentIntent.id,
                email,
                paymentId: _id
            }

            fetch(`http://localhost:4500/payments`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! Your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="p-5 bg-gray-200 rounded-lg">
                <CardElement className="bg-white p-2 text-black"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#222222',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm capitalize w-full btn-accent text-white mt-5'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay Now <span className='ml-1'> ${bookPrice}</span>
                </button>
                <p className='text-red-600  font-semibold'>{cardError}</p>
            </form>


            {
                success && <div className='bg-secondary mt-4 p-4 rounded-lg'>
                    <p className='text-black font-bold'>{success}</p>
                    <p>Your Transaction Id: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }

        </div>
    );
};

export default CheckOutForm;