import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ buyBook, setBuyBook }) => {
    const user = useContext(AuthContext);
    console.log(user);

    const { title, book_photo, publishedDate, resale_price, original_price, used_years, seller_name, isVerified, location } = buyBook;

    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle text-white absolute right-3 top-3">✕</label>
                    <h3 className="text-3xl font-specially font-bold">{title}</h3>
                    <div className='mt-5'>
                        <form >
                            <div className='grid grid-cols-1 gap-3'>
                                <input name="name" type="text" placeholder='Full Name' className="input input-bordered w-full " defaultValue={user?.user?.displayName} disabled required />
                                <input name="email" type="email" placeholder='Email Address' className="input input-bordered w-full " defaultValue={user?.user?.email} disabled required />
                                <input name="phone" type="phone" placeholder='Phone Number' className="input input-bordered w-full " required />
                                <input type="submit" placeholder='Full Name' className="input input-bordered w-full  btn-accent mt-2 uppercase cursor-pointer" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;