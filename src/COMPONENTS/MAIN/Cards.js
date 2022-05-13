import React from 'react';
import CountUp from 'react-countup';
import {useGlobalcontext} from "../../CONTEXT/Context";


const Cards = () => {
  const {confirmed, deaths, recovered, lastUpdate} = useGlobalcontext();
  return (
    <div className='cards__container'>
 <div className='cards__container__card confirmed'>
    <h1 className='cards__container__primary '>confiremed</h1>
    <h2 className='cards__container__amount cards__container__amount__confirmed'><CountUp start={0} end={confirmed}/></h2>
    <h2 className='cards__container__date'>{new Date(lastUpdate).toDateString()}</h2>
    <h3 className='cards__container__secondary' >number of active cases of COVID- 19</h3>

    </div>
 
    <div className='cards__container__card deaths'>
    <h1 className='cards__container__primary'>deaths</h1>
    <h2 className='cards__container__amount cards__container__amount__deaths'><CountUp start={0} end={deaths}/></h2>
    <h2 className='cards__container__date'>{new Date(lastUpdate).toDateString()}</h2>
    <h3 className='cards__container__secondary' >number of active cases of COVID- 19</h3>

    </div>
    </div>
  )
}

export default Cards