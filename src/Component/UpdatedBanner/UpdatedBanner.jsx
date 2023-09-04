import React from 'react';
import CountUp from 'react-countup';
import MovingComponent from '../MovingComponent/MovingComponent';



const UpdatedBanner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center md:items-center max-w-[1600px] mx-auto  py-20'>
            <div className='basis-[50%] m-5'>
                <div className='text-[#FF9021] mx-7 md:mx-1 md:text-4xl text-2xl text-center md:text-start font-semibold'>Trusted by
                    <CountUp className='ms-2 md:text-5xl underline' suffix="+" end={1425} duration={2.5} />

                    Organizations
                </div>
                <div className='md:text-7xl text-4xl mx-5 md:mx-1 text-gray-800 text-center md:text-start font-bold my-5'>
                    Easy Online Election Excellence
                </div>
                <p className='text-gray-400 md:text-2xl text-lg text-center md:text-start px-5 md:px-1  md:pe-6'>Votepulse guarantees election integrity and saves serious hours. It allows you or your voters to vote online with full security</p>
                <div className='flex-col justify-center items-center  gap-6 py-5'>
                    <button className='bg-[#FF9021] w-[100%] md:w-fit  text-white px-6 py-5 md:text-xl font-semibold rounded-md md:hover:scale-105 transition duration-300 ease-in-out md:mx-2 my-1'>Start A Free Election</button>

                    <button className='text-[#FF9021] w-[100%] md:w-fit md:mx-2 my-1 md:hover:text-white px-6 py-5 md:text-xl font-semibold rounded-md md:hover:bg-[#ff9021] transition duration-300 ease-in-out underline text-center md:hover:scale-105 '>Explore services and options</button>
                </div>
            </div>
            <div className='basis-[50%] relative'>
                <img src="/home-cover.jpg" className=' w-[70%] md:w-full  mx-auto'  alt="" />
                <MovingComponent className="custom-class" />
            </div>
        </div>
    );
};

export default UpdatedBanner;