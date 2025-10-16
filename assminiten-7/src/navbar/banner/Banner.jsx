import React from 'react';
import vectorLeft from "../../assets/vector1.png";

const Banner = ({ progress, resolved }) => {
    const filterdata = progress.filter(progres => progres.status === "open");
    //   console.log(filterdata.length)
    return (

        <div className="flex flex-col md:flex-row mt-4 justify-center items-center gap-4 px-4">
            <div className="w-full md:w-[45%] bg-gradient-to-r from-[#642ee4] to-[#a062f3] text-center flex justify-center items-center rounded-xl shadow-lg hover:from-[#a062f3] hover:to-[#642ee4] p-6 transition-all duration-300 h-[15.625rem]">
                <img src={vectorLeft} />
                <div>
                    <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">Progress</h3>
                    <span className="text-white text-2xl font-bold">{filterdata.length}</span>
                </div>
                <img src={vectorLeft} className="transform scale-x-[-1]" alt="" />
            </div>


            <div className="w-full md:w-[45%] bg-gradient-to-r from-[#53cf68] to-[#00827a] flex justify-center items-center rounded-xl shadow-lg text-center hover:from-[#00827a] hover:to-[#53cf68] p-6 transition-all duration-300 h-[15.625rem]">
                <img src={vectorLeft} alt="" />
                <div>
                    <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">Resolved</h3>
                    <span className="text-white text-2xl font-bold">{resolved.length}</span>
                </div>
                <img src={vectorLeft} className="transform scale-x-[-1]" alt="" />
            </div>
        </div>


    );
};

export default Banner;