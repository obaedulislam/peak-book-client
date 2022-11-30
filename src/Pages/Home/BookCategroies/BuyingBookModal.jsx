import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BuyingBookModal = ({ buyBook, setBuyBook }) => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const { _id, book_title, book_photo, publishedDate, resale_price, original_price, used_years, seller_name, isVerified, location } = buyBook;


    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const bookTitle = form.book_title.value;
        const bookPrice = form.resale_price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        //console.log(slot, name, phone, email);
        const booking = {
            userName,
            email,
            bookTitle,
            bookPrice,
            phone,
            location,
            book_photo,
            bookId: _id,
        }

        fetch('https://peakbook-server.vercel.app/buyingBooks', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success(`You have successfully booked ${bookTitle}`)
                    setBuyBook(null);
                }
                else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle text-white absolute right-3 top-3">✕</label>
                    <h3 className="text-3xl font-specially font-bold">{book_title}</h3>
                    <div className='mt-5'>
                        {
                            user?.email ? <form onSubmit={handleBooking}>
                                <div className='grid grid-cols-1 gap-3'>
                                    <input name="name" type="text" placeholder='Full Name' className="input input-bordered w-full font-medium" defaultValue={user?.displayName} disabled required />
                                    <input name="email" type="email" placeholder='Email Address' className="input input-bordered w-full font-medium" defaultValue={user?.email} disabled required />
                                    <input name="book_title" type="text" className="input input-bordered w-full font-medium " defaultValue={book_title} disabled required />
                                    <input name="resale_price" type="number" className="input input-bordered w-full font-medium " value={resale_price} disabled required />
                                    <input name="phone" type="phone" placeholder='Your phone number' className="input input-bordered w-full font-medium" required />
                                    <input name="location" type="text" placeholder='Meeting location' className="input input-bordered w-full font-medium" required />
                                    <input type="submit" placeholder='Full Name' className="input input-bordered w-full  btn-primary text-white text-xl mt-2 uppercase cursor-pointer" />
                                </div>
                            </form>
                                :
                                <p>You need to <Link className='text-primary font-bold font-specially underline rounded-lg' to='/login'>Login</Link> please, to Buy this Book</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuyingBookModal;