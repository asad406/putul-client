// import React from 'react';
import { useForm } from 'react-hook-form';

import useTitle from '../../hooks/useTitle';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AddAToy = () => {
    useTitle('Add A Toy');
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    // console.log(user);
    const { displayName, email } = user || {};

    const onSubmit = (data) => {
        // console.log(data);
        fetch('https://putul-server-flame.vercel.app/addAToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'A Toy has been Added',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    return (
        <div className="my-container py-10">
            <div className="shadow-xl rounded-xl md:p-10">
                <h1 className="text-2xl md:text-4xl font-semibold text-center underline">
                    Add a Toy
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">
                        <div className="md:grid md:grid-cols-2 md:gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Seller Name
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Seller Name"
                                    defaultValue={displayName}
                                    className="input input-bordered"
                                    {...register('name')}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    className="input input-bordered"
                                    required
                                    {...register('email', { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Toy Name"
                                    className="input input-bordered"
                                    required
                                    {...register('toyName', { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Toy Photo URL"
                                    className="input input-bordered"
                                    {...register('photo')}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Sub-Category
                                    </span>
                                </label>
                                <div className="border rounded-lg pb-5">
                                    <select {...register('category')}>
                                        <option value="wooden">
                                            Wooden Toy
                                        </option>
                                        <option value="soil">Soil Toy</option>
                                        <option value="traditional">
                                            Traditional Toy
                                        </option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Price"
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
                                    placeholder="Available Quantity"
                                    className="input input-bordered"
                                    required
                                    {...register('quantity', {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Rating"
                                    className="input input-bordered"
                                    required
                                    {...register('rating', { required: true })}
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
                                placeholder="Details Description"
                                className="input input-bordered"
                                required
                                {...register('details', { required: true })}
                            />
                        </div>

                        <div className="form-control mt-6">
                            <input
                                type="submit"
                                value="Add a Toy"
                                className="btn-custom"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAToy;
