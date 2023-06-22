import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Gallery = () => {
    const [allToys, setAllToys] = useState([]);
    // console.log(allToys);

    useEffect(() => {
        fetch('https://putul-server-flame.vercel.app/allToys')
            .then((res) => res.json())
            .then((data) => setAllToys(data));
    }, []);
    return (
        <div
            className="my-container py-12 "
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            <div className="pb-10">
                <h1 className=" md:text-4xl text-2xl text-center md:font-bold font-semibold">
                    Toy Photo Gallery
                </h1>
                <p className="md:text-lg text-gray-500 text-center">
                    Your favorite toy collection.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 ">
                {allToys.slice(0, 6).map((toyPic) => (
                    <div key={toyPic._id}>
                        <Link to={`/details/${toyPic._id}`}>
                            <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-1  shadow-lg hover:shadow-2xl p-2 border">
                                <img
                                    className="max-w-[400px] max-h-[270px] object-center object-cover"
                                    src={toyPic?.photo}
                                    alt=""
                                />
                                <div className="bg-black px-6 py-4 bg-opacity-60 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
                                    <div className="mt-auto flex items-center justify-between">
                                        <div>
                                            <p className="text-xl">
                                                {toyPic.toyName}
                                            </p>
                                            <p className="text-lg">
                                                Price ${toyPic.price}
                                            </p>
                                        </div>
                                        <div>
                                            <FaAngleDoubleRight className="text-3xl" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
