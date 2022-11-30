import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='max-w-[600px] mx-auto bg-gray-100 p-5 rounded-lg'>
            <h3 className="lg:text-4xl md:text-2xl text-xl text-accent font-bold text-center">Welcome <span className='text-primary'>{user?.displayName} to Peak Book</span> </h3>
        </div>
    );
};

export default Dashboard;