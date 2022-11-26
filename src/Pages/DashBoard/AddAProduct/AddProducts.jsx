import React, { useState } from 'react';
import AddAProduct from './AddAProduct';

const AddProducts = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());



    return (
        <div >
            <AddAProduct
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AddAProduct>
        </div>
    );
};

export default AddProducts;