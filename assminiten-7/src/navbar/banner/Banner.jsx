import React from "react";
import vectorLeft from "../../assets/vector1.png";

const Banner = ({ progress, resolved }) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 mt-6">
            <div className="relative flex w-full md:w-[45%] h-[14rem] sm:h-[15rem] bg-gradient-to-r from-[#642ee4] to-[#a062f3] text-center rounded-2xl shadow-lg hover:from-[#a062f3] hover:to-[#642ee4] transition-all duration-300 overflow-hidden">
                <img
                    src={vectorLeft}
                    alt=""
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-16 sm:w-20 opacity-60"
                />
                <div className="m-auto z-10">
                    <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2">
                        Progress
                    </h3>
                    <span className="text-white text-3xl sm:text-4xl font-bold">
                        {progress?.length || 0}
                    </span>
                </div>
                <img
                    src={vectorLeft}
                    alt=""
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-16 sm:w-20 opacity-60 transform scale-x-[-1]"
                />
            </div>
            <div className="relative flex w-full md:w-[45%] h-[14rem] sm:h-[15rem] bg-gradient-to-r from-[#53cf68] to-[#00827a] text-center rounded-2xl shadow-lg hover:from-[#00827a] hover:to-[#53cf68] transition-all duration-300 overflow-hidden">
                <img
                    src={vectorLeft}
                    alt=""
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-16 sm:w-20 opacity-60"
                />
                <div className="m-auto z-10">
                    <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2">
                        Resolved
                    </h3>
                    <span className="text-white text-3xl sm:text-4xl font-bold">
                        {resolved?.length || 0}
                    </span>
                </div>
                <img
                    src={vectorLeft}
                    alt=""
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-16 sm:w-20 opacity-60 transform scale-x-[-1]"
                />
            </div>
        </div>
    );
};

export default Banner;
