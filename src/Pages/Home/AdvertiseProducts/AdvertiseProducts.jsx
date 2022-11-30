import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import Book from '../BookCategroies/Book';
import BuyingBookModal from '../BookCategroies/BuyingBookModal';

const AdvertiseProducts = () => {
    const [buyBook, setBuyBook] = useState(null)
    const [adsProducts, setAdsProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://peakbook-server.vercel.app/advertised-products`)
            .then(data => setAdsProducts(data.data.adsProducts))
    }, [])
    console.log(adsProducts);

    return (
        <div>
            {
                adsProducts?.length > 0 && <section className="body-font bg-base-100 lg:px-0 md:px-4 px-3">
                    <div className="">
                        <div className="">

                            <h2 className='text-primary md:text-5xl sm:text-4xl text-2xl font-specially font-bold  tracking-tight'>Advertised Products</h2>
                            <div className=' mt-2'>
                                <div className='w-24 h-[6px] bg-accent'></div>
                            </div>
                            <div className=' grid rounded-xl md:grid-cols-3 sm:grid-cols-2 grid-cols-1  lg:gap-6 gap-4 lg:px-0  mt-7'>
                                {
                                    adsProducts.map(book => <Book
                                        key={book._id}
                                        book={book}
                                        setBuyBook={setBuyBook}
                                    ></Book>)
                                }
                            </div>
                            {
                                buyBook &&
                                <BuyingBookModal
                                    buyBook={buyBook}
                                    setBuyBook={setBuyBook}
                                ></BuyingBookModal>
                            }
                        </div>
                    </div>
                </section>
            }
        </div>

    );
};

export default AdvertiseProducts;