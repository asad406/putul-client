// import React from 'react';
import Lottie from 'lottie-react';
import img from '../../assets/login.json';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const { register, handleSubmit } = useForm();
    const { googleSignIn, signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result);
                if (result) {
                    setSuccess('Login Successful');
                }
                navigate(from, {replace: true})
            })
            .then((error) => {
                console.log(error);
                if (error) {
                    setError('Login Not Successful');
                }
            });
    };
    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then((result) => {
                console.log(result);
                if (result) {
                    setSuccess('Login Successful');
                }
                navigate(from, {replace: true})
            })
            .catch((error) => {
                console.log(error);
                if (error) {
                    setError('Login Not Successful');
                }
            });
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-sm bg-base-100">
                    <div className="mt-8 px-8">
                        <h1 className="text-3xl text-center font-bold">
                            Login to Your Account
                        </h1>
                        <p className="text-center text-sm font-thin">
                            Login using google account
                        </p>
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleGoogleSignIn}
                                className="border-indigo-700 border py-1 px-5 rounded  text-indigo-700 hover:bg-indigo-600 hover:text-white flex items-center justify-center"
                            >
                                <span className="mr-2 font-bold">
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
                                    value="Login"
                                    className="btn-custom"
                                />
                            </div>
                            <div>
                                Do not Have an Account?
                                <Link
                                    className="text-decoration-none text-indigo-700 font-semibold"
                                    to="/register"
                                >
                                    Register
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

export default Login;
