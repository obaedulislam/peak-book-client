import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllSellers = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://peakbook-server.vercel.app/users/sellers`);
            const data = await res.json();
            return data;
        }
    })

    //Verify seller
    const handleVerifySeller = id => {
        fetch(`https://peakbook-server.vercel.app/seller/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ status: true })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status) {
                    refetch();
                    toast.success(data.message);
                } else {
                    toast.error(data.error)
                }

            })
    }

    //Delete Seller from DB & Client
    const handleDeleteSeller = id => {
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
                fetch(`https://peakbook-server.vercel.app/seller/${id}`, {
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
            <h3 className="lg:text-4xl md:text-2xl text-xl text-accent font-bold ">All Sellers</h3>
            <div className=' mt-2'>
                <div className='md:w-24 md:h-[6px] w-20 h-[4px] bg-primary'></div>
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
                            sellers.map((seller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className="w-10 h-10 rounded-full" src={seller?.url} alt={seller?.name} />
                                        </div>
                                        <div><p className='font-bold ml-2'>{seller?.name}</p></div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm">{seller?.email}</td>
                                <td className="font-semibold text-primary">
                                    {
                                        seller?.isSellerVerified ?
                                            <p> Verified</p>
                                            :
                                            <button onClick={() => handleVerifySeller(seller._id)} className=" py-[2px] rounded-lg   px-2  bg-red-500   duration-300 hover:border-[#5C7CFA] hover:bg-accent text-white   text-sm capitalize font-semibold flex items-center "><BsTrash className=' mr-1'></BsTrash> Verify Seller</button>
                                    }
                                </td>

                                <td className="font-semibold text-sm text-center"><div className="">
                                    <Link className="text-center"><button onClick={() => handleDeleteSeller(seller._id)} className=" py-[2px] rounded-lg   px-2  bg-red-500   duration-300 hover:border-[#5C7CFA] hover:bg-accent text-white   text-sm capitalize font-semibold flex items-center "><BsTrash className=' mr-1'></BsTrash> Delete</button></Link>
                                </div></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div >
        </div >
    );
};

export default AllSellers;