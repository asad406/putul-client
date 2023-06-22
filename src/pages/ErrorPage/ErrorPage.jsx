// import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img404 from '../../assets/not.json';
import Lottie from 'lottie-react';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className="my-container">
            <div className='lg:max-w-4xl mx-auto'>
                <Lottie
                    animationData={img404}
                    loop={true}
                    className='w-full'
                />
            </div>
            <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold">
                    <span>Error </span>
                    {status || 404}
                </h2>
                <p className="mb-4 text-red-700 font-semibold text-xl">
                    {error?.message}
                </p>
                <Link
                    to="/"
                    className="inline-block btn-custom"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
