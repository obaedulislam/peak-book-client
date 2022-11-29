import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4500/users/buyers`);
            const data = await res.json();
            return data;
        }
    })

    //Delete Buyer from DB & Client
    const handleDeleteBuyer = id => {
        Swal.fire({
            title: 'Are you sure You want to delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4500/buyer/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
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
        <div>
            <h3 className="text-4xl text-accent font-bold ">All Buyers</h3>
            <div className=' mt-1'>
                <div className='w-24 h-[6px] bg-primary'></div>
            </div>
            <div className="overflow-x-auto w-full mt-5">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr >
                            <th className="text-[16px] font-specially">Serial</th>
                            <th className="text-[16px] font-specially">Profile</th>
                            <th className="text-[16px] font-specially">Email</th>
                            <th className="text-[16px] font-specially">Position</th>
                            <th className="text-[16px] font-specially">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer?._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className="w-10 h-10 rounded-full" src={buyer?.url} alt={buyer?.name} />
                                        </div>
                                        <div><p className='font-bold ml-2'>{buyer?.name}</p></div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm">{buyer?.email}</td>
                                <td className="font-semibold text-primary"><span className='bg-gray-100 py-1 px-2 rounded-lg text-sm'>{buyer?.role}</span></td>

                                <td className="font-semibold text-sm text-center"><div className="">
                                    <button onClick={() => handleDeleteBuyer(buyer._id)} className=" py-[3px] rounded-lg   px-3  bg-accent  duration-300 hover:border-[#5C7CFA] hover:bg-primary text-white    font-semibold flex items-center "> Delete</button>
                                </div></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;