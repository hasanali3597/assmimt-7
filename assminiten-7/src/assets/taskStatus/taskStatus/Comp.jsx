import React from 'react';

const Comp = ({ comple,}) => {
    // console.log(complet)
    return (
        <div>
            <h1 onClick={()=>hendelcomplet(comple)} className='text-2xl font-bold'>Task Complete </h1>
            <div className='bg-[#e0e7ff] shadow-xl p-3 rounded-xl'>
                <h1 className='text-xl font-semibold'>{comple.title}</h1>
            </div>

        </div>
    );
};

export default Comp;