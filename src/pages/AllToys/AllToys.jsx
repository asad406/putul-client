// import React from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Toys from './Toys';

const AllToys = () => {
    useTitle('All Toys');
    const { register, handleSubmit } = useForm();
    const [allToys, setAllToys] = useState([]);

    useEffect(() => {
        fetch('https://putul-server-flame.vercel.app/allToys')
            .then((res) => res.json())
            .then((data) => setAllToys(data));
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        fetch(`https://putul-server-flame.vercel.app/toySearch/${data?.text}`)
            .then((res) => res.json())
            .then((data) => {
                setAllToys(data);
            });
    };
    return (
        <div className="my-container py-10">
            <div className="overflow-x-auto shadow-xl rounded-xl">
                <h1 className="text-center text-3xl md:text-4xl font-bold pb-10">
                    All Toys Collections
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="text-center ">
                            <input
                                type="text"
                                placeholder="Search Toy"
                                className="input input-bordered"
                                required
                                {...register('text', { required: true })}
                            />
                            <input
                                type="submit"
                                value="Search Toy"
                                className="btn-custom ml-3"
                            />
                        </div>
                    </div>
                </form>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-indigo-500 ">
                            <th>#</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys?.map((toys, index) => (
                            <Toys
                                key={toys._id}
                                toys={toys}
                                index={index}
                            ></Toys>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
