import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../../Shared/Loading/Loading";
import Product from "./Product";

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://peakbook-server.vercel.app/my-products?email=${user?.email}`;
    console.log(url);
    const { data: myProducts = [], isLoading, refetch } = useQuery({
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
        fetch(`https://peakbook-server.vercel.app/my-products/${id}`, {
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
        fetch(`https://peakbook-server.vercel.app/my-products/ad/${id}`, {
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


    //Delete book from client & MongoDB
    const handleDeleteBook = id => {
        Swal.fire({
            title: 'Are you sure You want to delte?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
        fetch(`https://peakbook-server.vercel.app/my-products/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

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
                                myProducts.map((book, i) => <Product
                                    i={i}
                                    book={book}
                                    key={book._id}
                                    handleProductSales={handleProductSales}
                                    handleAdvertisement={handleAdvertisement}
                                    handleDeleteBook={handleDeleteBook}
                                ></Product>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    );
};

export default MyProducts;
