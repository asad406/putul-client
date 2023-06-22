// import React from 'react';
import useTitle from '../../hooks/useTitle';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysUpdate = () => {
    useTitle('update');
    const { register, handleSubmit } = useForm();
    const toy = useLoaderData();

    const onSubmit = (data) => {
        fetch(`https://putul-server-flame.vercel.app/update/${toy._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy has been Updated',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });

        // reset()
    };
    return (
        <div className="my-container py-10">
            <div className="shadow-xl rounded-xl md:p-10">
                <h1 className="text-2xl md:text-4xl font-semibold text-center underline">
                    Update a Toy
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="md:grid md:grid-cols-2 md:gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Price"
                                    defaultValue={toy?.price}
                                    className="input input-bordered"
                                    required
                                    {...register('price', { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Available Quantity
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    defaultValue={toy?.quantity}
                                    placeholder="Available Quantity"
                                    className="input input-bordered"
                                    required
                                    {...register('quantity', {
                                        required: true,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Details Description
                                </span>
                            </label>
                            <input
                                type="text"
                                defaultValue={toy?.details}
                                placeholder="Details Description"
                                className="input input-bordered"
                                required
                                {...register('details', { required: true })}
                            />
                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Update"
                                className="btn-custom"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MyToysUpdate;
