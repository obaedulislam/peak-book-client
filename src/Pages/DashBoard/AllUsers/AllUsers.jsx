import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://peakbook-server.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    })


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
                            users?.users?.map((user, i) => <tr>
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
                                    <Link className="text-center"><button className=" py-[3px] rounded-lg   px-3  bg-accent  duration-300 hover:border-[#5C7CFA] hover:bg-primary text-white    font-semibold flex items-center "> Delete</button></Link>
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