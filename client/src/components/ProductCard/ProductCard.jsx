import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useMediaQuery } from '@mui/material';

function ProductCard(
    // { product }
    ) {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const md = useMediaQuery("(min-width:1024px)")

    // const handleDetails = () => {
    //     navigate(`/product/${product.id}`, {
    //         state: {
    //             item: product
    //         }
    //     });
    // };

    return (
        <div className={`relative group ${md ? 'w-full' : 'w-[100%] justify-center align-center'}`}>
            <div
                // onClick={handleDetails} 
                className="w-full h-[500px] overflow-hidden cursor-pointer">
                <img
                    // src={product.Images && product.Images.length > 0 ? product.Images[0] : ''}
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="Image"
                    className="object-cover w-full h-full duration-500 hover:scale-110"
                />
            </div>
            <div className='w-full border-[1px] px-2 py-4'>
                <div className='flex justify-between align-center'>
                    <div>
                        <h2 className='text-2xl font-bold font-titleFont'>
                            {/* {product.Name} */}
                            Item 1
                        </h2>
                    </div>
                    <div className='relative flex gap-2 overflow-hidden w-28'>
                        <div className='relative flex justify-end gap-2 px-2 mx-2 transition-transform duration-500 transform group-hover:translate-x-32 -text-sm w-28'>
                            <p className="line-through text-[12px] text-gray-500">
                                {/* ${product.Old_Price} */}
                                $100
                            </p>
                            <p className='font-semibold text-[12px]'>
                                {/* ${product.New_Price} */}
                                $50 
                            </p>
                        </div>
                        <p className='absolute text-[11px] z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center 
                        gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform 
                        cursor-pointer duration-500'
                        >
                            add to cart{" "}
                            <span>
                                <BsArrowRight size={7} />
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    <p>
                        {/* {product.Category} */}
                        Shawl
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
