// import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ClientsSay = () => {
    return (
        <div className="bg-indigo-100 py-10">
            <div className="flex justify-center">
                <div className="lg:w-4/6 px-12 space-y-10">
                    <div>
                        <h1 className=" md:text-4xl text-2xl text-center md:font-bold font-semibold">
                            What our Happy Clients Say
                        </h1>
                        <p className="md:text-lg text-gray-500 text-center">
                            Your satisfaction is our achievement.
                        </p>
                    </div>
                    <div className="md:flex gap-4 ">
                        <div
                            className=" border border-indigo-400 rounded shadow-md p-4 space-y-5"
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <p>
                                I am delighted with my recent toy purchase! The
                                quality is excellent, and my child absolutely
                                loves playing with it. The ordering process was
                                smooth and hassle-free, and the toy arrived
                                promptly. The customer service was outstanding,
                                as they promptly responded to my inquiries and
                                provided helpful guidance. Overall, it was a
                                fantastic experience, and I highly recommend
                                this toy store to others!
                            </p>
                            <hr className="border-indigo-800 border-1" />

                            <div className="flex items-center">
                                <img
                                    className="w-20 rounded-full"
                                    src="https://i.ibb.co/Yb3YjpQ/chef.jpg"
                                    alt="img"
                                />
                                <div className="ml-3">
                                    <p className="font-semibold">
                                        Kelley Alvarado
                                    </p>
                                    <p>
                                        <small>Customer</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="mt-5 md:mt-0 border border-indigo-400 rounded shadow-md p-4 space-y-5"
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-center"
                        >
                            <p>
                                I am delighted with my recent toy purchase! The
                                quality is excellent, and my child absolutely
                                loves playing with it. The ordering process was
                                smooth and hassle-free, and the toy arrived
                                promptly. The customer service was outstanding,
                                as they promptly responded to my inquiries and
                                provided helpful guidance. Overall, it was a
                                fantastic experience, and I highly recommend
                                this toy store to others!
                            </p>
                            <hr className="border-indigo-800 border-1" />

                            <div className="flex items-center">
                                <img
                                    className="w-20 rounded-full"
                                    src="https://i.ibb.co/Yb3YjpQ/chef.jpg"
                                    alt="img"
                                />
                                <div className="ml-3">
                                    <p className="font-semibold">
                                        Kelley Alvarado
                                    </p>
                                    <p>
                                        <small>Customer</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsSay;
