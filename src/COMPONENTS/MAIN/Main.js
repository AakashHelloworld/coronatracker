import React, {useState} from 'react'
import Cards from './Cards'
import Charts from './Charts'
import Searchform from './Searchform'
import {useGlobalcontext} from "../../CONTEXT/Context"

const Main = () => {
  const [selectcountry, setSelectcountry] = useState('');
  const {confirmed,deaths,countries,lastUpdate,dataforchart} = useGlobalcontext();
  if(!dataforchart.length && !countries.length){
    return<div className='Main_loading'><h1>loading...</h1></div>
  }

  return (
    <div className='Main'>
    <Searchform selectcountry={selectcountry} setSelectcountry={setSelectcountry}/>
       {/* <Cards/> */}
       <div className='flex__items'>
       
       <Charts selectcountry={selectcountry} setSelectcountry={setSelectcountry}/>
       
       <Cards/>
       </div>
    </div>
  )
}

export default Main