/* eslint-disable no-unused-vars */
// import React from 'react';

import { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState();
    const [color, setColor] = useState(false);
    const [coloor, setColoor] = useState(false);
    // const [control, setControl] = useState(false)

    useEffect(() => {
        fetch(`https://putul-server-flame.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    }, [user]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://putul-server-flame.vercel.app/myToy/${_id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(
                                (toys) => toys._id !== _id
                            );
                            setMyToys(remaining);

                            Swal.fire(
                                'Deleted!',
                                'A Toy has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };
    const handleAscending = () => {
        setColor(true);
        setColoor(false);
        fetch(`https://putul-server-flame.vercel.app/ascending/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    };
    const handleDescending = () => {
        setColoor(true);
        setColor(false);
        fetch(`https://putul-server-flame.vercel.app/descending/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setMyToys(data));
    };
    return (
        <div className="my-container py-10">
            <div className="overflow-x-auto shadow-xl rounded-xl">
                <h1 className="text-center text-3xl md:text-4xl font-bold pb-10">
                    My Toys Collections
                </h1>
                <div className="text-center mb-3">
                    <button
                        onClick={handleAscending}
                        className={
                            color
                                ? 'bg-indigo-500 border-indigo-500 border-2  text-white px-4 py-2 font-semibold '
                                : 'border-2 border-indigo-700 text-indigo-700 px-4 py-2 font-semibold '
                        }
                    >
                        Ascending by Price
                    </button>
                    <button
                        onClick={handleDescending}
                        className={
                            coloor
                                ? 'bg-indigo-500 border-indigo-500 border-2 text-white px-4 py-2 font-semibold '
                                : 'border-2 border-indigo-700 text-indigo-700 px-4 py-2 font-semibold '
                        }
                    >
                        Descending by Price
                    </button>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-indigo-500 ">
                            <th>#</th>
                            <th>Picture</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myToys?.map((myToy, index) => (
                            <tr key={myToy._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <img
                                        src={myToy?.photo}
                                        alt=""
                                    />
                                </td>
                                <td>{myToy?.toyName}</td>
                                <td>{myToy?.name}</td>
                                <td>{myToy?.category}</td>
                                <td>{`$${myToy?.price}`}</td>
                                <td>{myToy?.rating}</td>
                                <td>{myToy?.quantity}</td>
                                <td>{myToy?.details.slice(0, 22)}</td>

                                <td>
                                    <Link to={`/update/${myToy._id}`}>
                                        <button className="btn btn-sm btn-primary">
                                            Update
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(myToy._id)}
                                        className="btn btn-sm btn-error text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
