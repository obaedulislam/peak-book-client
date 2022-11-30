import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://peakbook-server.vercel.app/users`);
            const data = await res.json();
            return data.users;
        }
    })

    //Delete book from client & MongoDB
    const handleDeleteUser = id => {
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
                fetch(`https://peakbook-server.vercel.app/user/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
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
        <div>
            <h3 className="text-4xl text-accent font-bold ">All Users</h3>
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
                            users?.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className="w-10 h-10 rounded-full" src={user?.url} alt={user?.name} />
                                        </div>
                                        <div><p className='font-bold ml-2'>{user?.name}</p></div>
                                    </div>
                                </td>
                                <td className="font-semibold text-sm">{user?.email}</td>
                                <td className="font-semibold text-primary"><span className='bg-gray-100 py-1 px-2 rounded-lg text-sm'>{user?.role}</span></td>

                                <td className="font-semibold text-sm text-center"><div className="">
                                    <Link className="text-center"><button onClick={() => handleDeleteUser(user._id)} className=" py-[2px] rounded-lg   px-2  bg-red-500   duration-300 hover:border-[#5C7CFA] hover:bg-accent text-white   text-sm capitalize font-semibold flex items-center "><BsTrash className=' mr-1'></BsTrash> Delete</button></Link>
                                </div></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;