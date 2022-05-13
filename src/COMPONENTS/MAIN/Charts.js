import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend,AreaChart,Area, BarChart,
  Bar, } from 'recharts';
import {useGlobalcontext} from "../../CONTEXT/Context"


const Charts = ({selectcountry, setSelectcountry}) => {
  const {dataforchart, confirmed,deaths} = useGlobalcontext();
  const data =[{
    name:"INFECTED",
    value:confirmed
  },{
    name:"DEATHS",
    value:deaths
  }];

  


  return (
<div className='chart__container'>
{ (selectcountry=='' || selectcountry=='all')?
<AreaChart
      width={800}
      height={560}
      data={dataforchart}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="deaths" stackId="1" stroke="red" fill="red" />
      <Area type="monotone" dataKey="confirmed" stackId="1" stroke="blue" fill="blue" />
         
      
    </AreaChart> : null
}
{
  (selectcountry && selectcountry!='all')?  <BarChart
      width={800}
      height={560}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      
      <Bar dataKey="value" fill="orange" />
    </BarChart>: null

}
    </div>

    
  )
}

export default Charts