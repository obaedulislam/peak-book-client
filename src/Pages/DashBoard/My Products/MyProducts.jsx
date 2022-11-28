import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { BsCartPlusFill, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:4500/my-products?email=${user?.email}`;
    console.log(url);
    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ["myProducts", user?.email],
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


    //Sales status of your product
    const handleProductSales = (id) => {
        fetch(`http://localhost:4500/my-products/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(` Product Sold`);
                    refetch();
                }
            });
    };

    // Advertise Your Product
    const handleAdvertisement = (id) => {
        fetch(`http://localhost:4500/my-products/ad/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Product Advertised");
                    refetch();
                }
            });
    };

    return (
        <div className="overflow-hidden p">

            <div className="overflow-hidden p">
                <h3 className="text-4xl text-accent font-bold ">My Products</h3>
                <div className=' mt-2'>
                    <div className='w-24 h-[6px] bg-primary'></div>
                </div>
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr >

                                <th className="text-[16px] font-specially">No.</th>
                                <th className="text-[16px] font-specially">Book</th>
                                <th className="text-[16px] font-specially">Price($)</th>
                                <th className="text-[16px] font-specially">Condition</th>
                                <th className="text-[16px] font-specially">Status</th>
                                <th className="text-[16px] font-specially">Advertisement</th>
                                <th className="text-[16px] font-specially">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myProducts.map((book, i) => <tr>
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
                                            book?.advertise ? <button className="py-1 px-2 bg-secondary text-black text-xs rounded hover:bg-secondary">Advertised</button> : <button onClick={() => handleAdvertisement(book._id)} className="py-1 px-2 bg-accent text-white text-xs rounded hover:bg-secondary">Advertise</button>
                                        }
                                    </td>
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

export default MyProducts;
