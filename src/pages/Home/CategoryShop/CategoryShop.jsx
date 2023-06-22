// import React from 'react';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CategoryShop = () => {
    const [cateWooden, setCateWooden] = useState([]);
    const [cateSoil, setCateSoil] = useState([]);
    const [cateTraditional, setCateTraditional] = useState([]);

    console.log(cateWooden);
    console.log(cateSoil);
    console.log(cateTraditional);

    useEffect(() => {
        fetch('https://putul-server-flame.vercel.app/allToys')
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    const woodenCate = data.filter(
                        (toy) => toy.category == 'wooden'
                    );
                    setCateWooden(woodenCate);

                    const soilCate = data.filter(
                        (toy) => toy.category == 'soil'
                    );
                    setCateSoil(soilCate);

                    const traditionalCate = data.filter(
                        (toy) => toy.category == 'traditional'
                    );
                    setCateTraditional(traditionalCate);
                }
            });
    }, []);

    const handleAlert = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'You have to log in first to view details',
            showConfirmButton: false,
            timer: 2000,
        });
    };

    return (
        <div className="my-container py-10">
            <h1 className="md:text-4xl text-2xl text-center md:font-bold font-semibold mb-8"></h1>
            <div className="pb-10">
                <h1 className=" md:text-4xl text-2xl text-center md:font-bold font-semibold">
                    Shop by Category
                </h1>
                <p className="md:text-lg text-gray-500 text-center">
                    Shop your favorite toy from Category.
                </p>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Wooden Toy</Tab>
                    <Tab>Traditional Toy</Tab>
                    <Tab>Soil Toy</Tab>
                </TabList>

                <TabPanel>
                    <div className="grid md:grid-cols-2 gap-4">
                        {cateWooden?.slice(0, 2).map((wToy) => (
                            <div key={wToy?._id}>
                                <div className="p-8 shadow-xl">
                                    <div>
                                        <img
                                            className="object-cover max-w-[540px] max-h-[280px] object-center"
                                            src={wToy?.photo}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            {wToy?.toyName}
                                        </h2>
                                        <p>
                                            Price:{' '}
                                            <span className="text-2xl text-red-600">
                                                ${wToy.price}
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mt-6">
                                            <hr className="border-1 border-indigo-300" />
                                            <div className="flex justify-between py-2">
                                                <div className="flex items-center mt-auto">
                                                    <Rating
                                                        style={{
                                                            maxWidth: 150,
                                                        }}
                                                        value={Math.round(
                                                            wToy.rating || 0
                                                        )}
                                                        readOnly
                                                    />
                                                    <span className="ml-4 font-semibold text-xl">
                                                        {wToy.rating}
                                                    </span>
                                                </div>
                                                <Link
                                                    to={`/details/${wToy._id}`}
                                                >
                                                    <button
                                                        onClick={handleAlert}
                                                        className="bg-indigo-500 text-white px-4 py-2 font-semibold rounded-md"
                                                    >
                                                        Details
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 gap-4">
                        {cateTraditional?.slice(0, 2).map((wToy) => (
                            <div key={wToy?._id}>
                                <div className="p-8 shadow-xl">
                                    <div>
                                        <img
                                            className="object-cover max-w-[540px] max-h-[280px] object-center"
                                            src={wToy?.photo}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            {wToy?.toyName}
                                        </h2>
                                        <p>
                                            Price:{' '}
                                            <span className="text-2xl text-red-600">
                                                ${wToy.price}
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mt-6">
                                            <hr className="border-1 border-indigo-300" />
                                            <div className="flex justify-between py-2">
                                                <div className="flex items-center mt-auto">
                                                    <Rating
                                                        style={{
                                                            maxWidth: 150,
                                                        }}
                                                        value={Math.round(
                                                            wToy.rating || 0
                                                        )}
                                                        readOnly
                                                    />
                                                    <span className="ml-4 font-semibold text-xl">
                                                        {wToy.rating}
                                                    </span>
                                                </div>
                                                <Link
                                                    to={`/details/${wToy._id}`}
                                                >
                                                    <button
                                                        onClick={handleAlert}
                                                        className="bg-indigo-500 text-white px-4 py-2 font-semibold rounded-md"
                                                    >
                                                        Details
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 gap-4">
                        {cateSoil?.slice(0, 2).map((wToy) => (
                            <div key={wToy?._id}>
                                <div className="p-8 shadow-xl">
                                    <div>
                                        <img
                                            className="object-cover max-w-[540px] max-h-[280px] object-center"
                                            src={wToy?.photo}
                                            alt="image"
                                        />
                                    </div>
                                    <div className="mt-5">
                                        <h2 className="text-2xl font-semibold mb-4">
                                            {wToy?.toyName}
                                        </h2>
                                        <p>
                                            Price:{' '}
                                            <span className="text-2xl text-red-600">
                                                ${wToy.price}
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mt-6">
                                            <hr className="border-1 border-indigo-300" />
                                            <div className="flex justify-between py-2">
                                                <div className="flex items-center mt-auto">
                                                    <Rating
                                                        style={{
                                                            maxWidth: 150,
                                                        }}
                                                        value={Math.round(
                                                            wToy.rating || 0
                                                        )}
                                                        readOnly
                                                    />
                                                    <span className="ml-4 font-semibold text-xl">
                                                        {wToy.rating}
                                                    </span>
                                                </div>
                                                <Link
                                                    to={`/details/${wToy._id}`}
                                                >
                                                    <button
                                                        onClick={handleAlert}
                                                        className="bg-indigo-500 text-white px-4 py-2 font-semibold rounded-md"
                                                    >
                                                        Details
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryShop;
