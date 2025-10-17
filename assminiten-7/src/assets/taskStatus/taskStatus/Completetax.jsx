import Comp from "./Comp";


const Completetax = ({ resolved, }) => {


    return (
        <div className='mt-10'>
            <h1 className='text-2xl font-bold ml-2'>Task Complete </h1>
            {
                resolved.map((comple) =>
                    <Comp comple={comple}></Comp>
                )
            }
        </div>
    );
};

export default Completetax;