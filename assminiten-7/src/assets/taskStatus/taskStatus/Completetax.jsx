import Comp from "./Comp";


const Completetax = ({ resolved,}) => {

    
    return (
        <div className='mt-10'>
            {
                resolved.map((comple)=>
                <Comp comple={comple}></Comp>
                )
            }
        </div>
    );
};

export default Completetax;