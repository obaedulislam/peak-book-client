import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ReportedItems = () => {

    const { data: reportedBook = [], refetch } = useQuery({
        queryKey: ['reportedBook'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4500/reported-products`);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="overflow-hidden p">
            <div className="overflow-hidden p">
                <h3 className="text-4xl text-accent font-bold ">Reported Book</h3>
                <div className=' mt-2'>
                    <div className='w-24 h-[6px] bg-primary'></div>
                </div>
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr >
                                <th className="text-[16px] font-specially">No.</th>
                                <th className="text-[16px] font-specially">Book Name</th>
                                <th className="text-[16px] font-specially">Seller Name</th>
                                <th className="text-[16px] font-specially">Seller Email</th>
                                <th className="text-[16px] font-specially">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reportedBook.map((book, i) => <tr>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className='flex items-center'>
                                            <div>
                                                <img className="w-[40px] h-12 shadow-lg" src={book?.book_photo} alt={book?.book_title} />
                                            </div>
                                            <div><p className='font-semibold text-xs ml-2'>{book?.book_title}</p></div>
                                        </div>
                                    </td>
                                    <td className="font-semibold text-sm">{book?.seller_name}</td>
                                    <td className="text-sm font-bold text-black ">{book?.seller_email}</td>

                                    <td className="font-semibold text-sm text-center"><div className="">
                                        <Link className="text-center"><button className=" py-[2px] rounded-lg   px-2  bg-red-500   duration-300 hover:border-[#5C7CFA] hover:bg-accent text-white   text-sm capitalize font-semibold flex items-center "><BsTrash className=' mr-1'></BsTrash> Delete</button></Link>
                                    </div></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    );
};

export default ReportedItems;