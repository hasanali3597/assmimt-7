import React, { useState } from 'react';

const Tikitcard = ({ tikit, hendelclick }) => {

    const [proggres, setProggres] = useState('open');

    const handelclick1 = () => {
        hendelclick(tikit);

        if (proggres === 'open') {
            setProggres('inprogress');
        } else if (proggres === 'inprogress') {
            setProggres('resolve');
        } else {
            setProggres('open');
        }
       
    };

    return (
        <div
            onClick={handelclick1}
            className="container mx-auto w-[481px] bg-[#ffffff] mt-1.5 shadow-sm p-4 cursor-pointer hover:shadow-md transition-all duration-300"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">{tikit.title}</h1>
                <span
                    className={`text-xl p-1 rounded-md transition-all duration-300 ${proggres === 'open'
                            ? 'bg-[#b9f8cf] text-green-700'
                            : proggres === 'inprogress'
                                ? 'bg-yellow-200 text-yellow-700'
                                : 'bg-blue-200 text-blue-700'
                        }`}
                >
                    {proggres}
                </span>
            </div>

            <h1 className="text-[#627382] my-1.5">{tikit.description}</h1>

            <div className="flex justify-between">
                <section className="flex gap-1.5">
                    <p className="text-[#627382]">{tikit.customerCode}</p>
                    <p className="text-[#febb0c]">{tikit.priority}</p>
                </section>
                <section className="flex gap-1.5">
                    <p className="text-[#627382]">{tikit.customer}</p>
                    <p className="text-[#627382]">{tikit.createdAt}</p>
                </section>
            </div>
        </div>
    );
};

export default Tikitcard;
