// import React from 'react';

import useTitle from "../../../hooks/useTitle";
import ClientsSay from "../ClientsSay/ClientsSay";
import Brands from "../Brands/Brands";
import Banner from "../Banner/Banner";
import CategoryShop from "../CategoryShop/CategoryShop";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    useTitle('Home')
    return (
        <div >
            <Banner></Banner>
            <CategoryShop></CategoryShop>
            <Gallery></Gallery>
            <ClientsSay></ClientsSay>
            <Brands></Brands>
        </div>
    );
};

export default Home;