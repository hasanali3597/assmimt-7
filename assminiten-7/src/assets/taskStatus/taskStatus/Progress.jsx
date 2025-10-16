import React from 'react';

const Progress = ({ data,hendelresoved }) => {
    return (
        <div className='bg-base-100 shadow-xl mt-3  p-3'>
            <h1 className='text-xl font-semibold'>{data.title}</h1>
            <div className='mx-auto rounded-md bg-amber-300 text-center mt-2 text-md font-medium' >
                <button onClick={()=>hendelresoved(data)}>Complete</button>
            </div>
        </div>
    );
};

export default Progress;