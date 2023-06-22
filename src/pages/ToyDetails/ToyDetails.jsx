// import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ToyDetails = () => {
    const singleToy = useLoaderData();
    const { name, toyName, photo, category, price, quantity, rating, details } =
        singleToy;

    return (
        <div className="my-container">
            <div className="grid md:grid-cols-3 shadow-2xl py-12">
                <div>
                    <img
                        src={photo}
                        alt=""
                    />
                </div>
                <div className="p-3 space-y-3">
                    <h1 className="text-2xl lg:text-3xl md:font-semibold ">
                        {toyName}
                    </h1>
                    <div>
                        <p>Supplier:</p>
                        <p className="text-xl">{name}</p>
                    </div>

                    <p className="text-3xl text-red-600">${price}</p>
                    <div>
                        <p>Available Quantity</p>
                        <p>
                            <span className="text-lg text-red-400">
                                {quantity}
                            </span>{' '}
                            unit
                        </p>
                    </div>

                    <div>
                        <button className="border-2 border-indigo-600 bg-indigo-600 text-white px-4 py-2 mr-3">
                            Buy Now
                        </button>
                        <button className="border-2 border-indigo-800 text-indigo-700 px-4 py-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
                <div className="p-3 space-y-3">
                    <div>
                        <h4>Category:</h4>
                        <h3 className="text-xl">{category} Toy</h3>
                    </div>
                    <div>
                        <p>Toy details:</p>
                        <p>{details}</p>
                    </div>
                    <div className="mt-6">
                        <hr className="border-1 border-indigo-300" />
                        <div className="flex items-center mt-auto">
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={Math.round(rating || 0)}
                                readOnly
                            />
                            <span className="ml-4 font-semibold text-xl">
                                {rating}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
