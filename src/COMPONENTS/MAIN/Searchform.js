import React, {useEffect, useState} from 'react'
import {useGlobalcontext} from "../../CONTEXT/Context"
const Searchform = ({selectcountry, setSelectcountry}) => {
  const {countries, fetchingotherdata} =useGlobalcontext();


  useEffect(()=>{
    // if(selectcountry){
    // 
    // }
    console.log(selectcountry)
    if(selectcountry ){
   fetchingotherdata(selectcountry);
    
    }
  },[selectcountry])

  return (
    <div className='searchform'>
      <select  onChange={(e)=> setSelectcountry(e.target.value)} className='searchform__select'>
        <option>all</option>
        {
          countries.length && 
            countries.map((data, index)=>{
              return (
              <option key={index}>{data.name}</option>
            )

            })
          
        }
      </select>
    </div>
  )
}

export default Searchform