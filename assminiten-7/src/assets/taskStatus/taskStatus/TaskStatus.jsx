import React, { use } from 'react';
import Progress from './Progress';

const TaskStatus = ({ progress, hendelresoved }) => {
    const filterdata = progress.filter(progres => progres.status === "open");

    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-2xl ml-2'>Task Status</h1>
            <div>

                {
                    filterdata.map((data) =>


                        <Progress hendelresoved={hendelresoved} data={data} key={data.id} ></Progress>
                    )

                }

                <h1></h1>
            </div>
        </div>
    );
};

export default TaskStatus;