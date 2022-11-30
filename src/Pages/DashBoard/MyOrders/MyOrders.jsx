import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { BsCartPlusFill } from 'react-icons/bs';

const MyOrders = () => {
    const { user } = useContext(AuthContext);


    const url = `https://peakbook-server.vercel.app/buyingBooks?email=${user?.email}`;
    console.log(url);
    const { data: buyingBooks = [] } = useQuery({
        queryKey: ["buyingBooks", user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className="overflow-hidden p">
            <h3 className="text-4xl text-accent font-bold ">My Orders</h3>
            <div className=' mt-2'>
                <div className='w-24 h-[6px] bg-primary'></div>
            </div>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr >
                            <th className="text-[16px] font-specially">Serial</th>
                            <th className="text-[16px] font-specially">Book Cover</th>
                            <th className="text-[16px] font-specially">Book Name</th>
                            <th className="text-[16px] font-specially">Price($)</th>
                            <th className="text-[16px] font-specially">Location</th>
                            <th className="text-[16px] font-specially">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyingBooks.map((book, i) => <tr>
                                <th>{i + 1}</th>
                                <td><img className="w-[40px] h-12 shadow-lg" src={book?.book_photo ? book?.book_photo : 'Image'} alt={book?.bookTitle} /></td>
                                <td className="font-semibold text-sm">{book?.bookTitle}</td>
                                <td className="font-semibold text-primary">${book?.bookPrice}</td>
                                <td className="font-semibold text-sm">{book?.location}</td>
                                <td className="font-semibold text-sm text-center"><div className="">
                                    {
                                        book?.bookPrice && !book.salesStatus && <Link to={`/dashboard/payment/${book._id}`} className="text-center"><button className=" py-[2px] rounded-lg   px-2  bg-[#5C7CFA]   duration-300 hover:border-[#5C7CFA] hover:bg-accent text-white   text-xs font-semibold flex items-center uppercase"><BsCartPlusFill className=' mr-1'></BsCartPlusFill> Pay</button></Link>
                                    }
                                    {
                                        book?.bookPrice && book.salesStatus && <button className=" py-[2px] rounded-lg   px-2  bg-secondary   duration-300  text-black   text-xs font-semibold flex items-center uppercase"> Paid</button>
                                    }
                                </div></td>


                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;
