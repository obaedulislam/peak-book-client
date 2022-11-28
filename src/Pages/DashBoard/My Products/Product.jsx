import React from 'react';
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ book, i, handleProductSales, handleAdvertisement, handleDeleteBook }) => {

    return (
        <tr>
            <th>{i + 1}</th>
            <td>
                <div className='flex items-center'>
                    <div>
                        <img className="w-[40px] h-12 shadow-lg" src={book?.book_photo} alt={book?.book_title} />
                    </div>
                    <div><p className='font-semibold text-xs ml-2'>{book?.book_title}</p></div>
                </div>
            </td>
            <td className="font-semibold text-sm">${book?.resale_price}</td>
            <td className="text-sm font-bold text-black ">{book?.product_condition}</td>
            <td className="font-semibold text-sm">
                {
                    book?.salesStatus ? <button className="py-1 px-2 bg-secondary text-black text-xs rounded hover:bg-secondary">Sold</button> : <button onClick={() => handleProductSales(book._id)} className="py-1 px-2 bg-accent text-white text-xs rounded hover:bg-secondary">Available</button>
                }
            </td>
            <td className="font-semibold text-sm">
                {
                    !book?.advertise && !book?.salesStatus && <button onClick={() => handleAdvertisement(book._id)} className="py-1 px-2 bg-accent text-white text-xs rounded hover:bg-secondary">Advertise</button>
                }
                {
                    book?.advertise && !book?.salesStatus && <button className=" py-1 px-2 bg-secondary text-black text-xs rounded hover:bg-secondary ">Advertised</button>
                }
            </td>
            <td className="font-semibold text-sm text-center"><div className="">
                <Link className="text-center"><button onClick={() => { handleDeleteBook(book._id) }} className=" py-[2px] rounded-lg   px-2  bg-red-500   duration-300 hover:border-[#5C7CFA] hover:bg-accent text-white   text-sm capitalize font-semibold flex items-center "><BsTrash className=' mr-1'></BsTrash> Delete</button></Link>
            </div></td>

        </tr>

    );
};

export default Product;