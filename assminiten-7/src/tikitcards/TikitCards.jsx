import React, { use } from 'react';
import Tikitcard from '../navbar/banner/tikitcard/tikitcard';

const TikitCards = ({ tikis,hendelclick }) => {
  const ptikit = use(tikis)
  // console.log(ptikit)

  return (
    <div className='grid md:grid-cols-2 gap-2 '>

      {
        ptikit.map((tikit) => {
          return <Tikitcard tikit={tikit} key={tikit.id}  hendelclick={hendelclick} ></Tikitcard>
        })
      }

    </div>
  );
};

export default TikitCards;
