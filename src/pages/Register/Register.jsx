// import React from 'react';
import Lottie from 'lottie-react';
import img from '../../assets/reg.json';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../../hooks/useTitle';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    useTitle('Register');
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const onSubmit = (data) => {
        console.log(data.name, data.photo, data.email, data.password)
        if (data?.email?.length < 0) {
            setError('Please Enter a valid Email');
        } else if (data?.password?.length < 0) {
            setError('Please enter valid password');
        } else if (data?.password?.length < 6) {
            setError('Password must more then 6 char.');
        } else {
            setError('');
        }

        createUser(data.email, data.password)
            .then((result) => {
                if (result) {
                    setSuccess('Registration Successful');
                    updateUser(data?.name, data?.photo)
                        .then((result) => {
                            console.log(result);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
            .catch((error) => setError(error.message));
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-sm bg-base-100">
                    <div className="mt-8 px-8">
                        <h1 className="text-3xl text-center font-bold">
                            Register to Your Account
                        </h1>
                        <p className="text-center text-sm font-thin">
                            Register using google account
                        </p>
                        <div className="flex justify-center mt-4">
                            <button className="border-indigo-700 border py-1 px-5 rounded hover:bg-indigo-600  text-indigo-700 hover:text-white flex items-center justify-center">
                                <span className="mr-2 font-bold ">
                                    <FaGoogle />
                                </span>
                                <span className="pb-1 font-semibold">
                                    gmail
                                </span>
                            </button>
                        </div>
                        <small className="divider">OR</small>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    {...register('name')}
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
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                    {...register('photo')}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                    {...register('email', { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                    {...register('password', {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    value="Register"
                                    className="btn-custom"
                                />
                            </div>
                            <div>
                                Already have an Account?{' '}
                                <Link
                                    className="text-decoration-none text-indigo-700 font-semibold"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                        {error && (
                            <div className="flex items-center justify-center">
                                <p className="mt-2 text-red-600 text-center  px-5 pb-4 ">
                                    {error}
                                </p>
                            </div>
                        )}
                        {success && (
                            <div className="flex items-center justify-center">
                                <p className="mt-2 text-success text-center  px-5 pb-4 rounded">
                                    {success}
                                </p>
                            </div>
                        )}
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <Lottie
                        animationData={img}
                        loop={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
