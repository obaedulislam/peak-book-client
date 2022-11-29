
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {


    console.log(stripePromise);
    const book = useLoaderData();
    console.log(book);

    return (
        <div>
            <div>
                <h4 className='lg:odd:text-2xl md:text-xl text-lg text-black font-semibold'><span className='font-bold text-primary'>Payment for Book: </span>{book?.bookTitle}</h4>
                <p className='font-specially text-lg mt-2 font-semibold'>Please Pay <span className='font-bold'>${book?.bookPrice}</span> for your order!</p>
                <div className='mt-5 w-[500px]'>
                    <Elements stripe={stripePromise}>
                        <CheckOutForm
                            book={book}
                        ></CheckOutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;