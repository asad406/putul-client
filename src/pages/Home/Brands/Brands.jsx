// import React from 'react';
import b1 from '../../../assets/b1.png'
import b2 from '../../../assets/b2.png'
import b3 from '../../../assets/b3.png'
import b4 from '../../../assets/b4.png'

const Brands = () => {
    return (
        <div className="my-container py-8">
            <div className='mb-8'>
                <h1 className="md:text-4xl text-2xl text-center md:font-bold font-semibold">Our Brands</h1>
                <p className="md:text-lg text-gray-500 text-center">More Than Your Average Toy Store</p>
            </div>
            <div className='grid grid-cols-5 justify-center items-center gap-4'>
                <img src={b1} alt="" />
                <img src={b2} alt="" />
                <img src={b3} alt="" />
                <img src={b4} alt="" />
                <img src={b2} alt="" />
            </div>
        </div>
    );
};

export default Brands;