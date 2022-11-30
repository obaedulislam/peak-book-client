import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ReportedItems = () => {

    const { data: reportedBook = [], refetch, isLoading } = useQuery({
        queryKey: ['reportedBook'],
        queryFn: async () => {
            const res = await fetch(`https://peakbook-server.vercel.app/reported-products`);
            const data = await res.json();
            return data;
        }
    })

    //Delete Reported Book from client & MongoDB
    const handleDeleteReportedBook = id => {
        Swal.fire({
            title: 'Are you sure You want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                fetch(`https://peakbook-server.vercel.app/reported-item/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-hidden p">
            <div className="overflow-hidden ">
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
                                        <Link className="text-center"><button onClick={() => handleDeleteReportedBook(book._id)} className=" py-[2px] rounded-lg   px-2  bg-red-500   duration-300 hover:border-[#5C7CFA] hover:bg-accent text-white   text-sm capitalize font-semibold flex items-center "><BsTrash className=' mr-1'></BsTrash> Delete</button></Link>
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