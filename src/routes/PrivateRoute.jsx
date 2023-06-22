// import React from 'react';

import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import img from '../assets/loading.json';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-290px)] w-1/4 mx-auto">
                <div>
                    <Lottie
                        animationData={img}
                        loop={true}
                    />
                </div>
            </div>
        );
    }

    if (user) {
        return children;
    }
    return (
        <Navigate
            state={{ from: location }}
            to="/login"
            replace
        ></Navigate>
    );
};

export default PrivateRoute;
