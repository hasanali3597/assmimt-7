

const Completetax = ({ resolved }) => {

    console.log(resolved)
    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-bold'>Task Complete </h1>
            <div className='bg-[#e0e7ff] shadow-xl p-3 rounded-xl'>
                <h1 className='text-xl font-semibold'>{resolved.title}</h1>
            </div>
        </div>
    );
};

export default Completetax;