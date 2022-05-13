import React,{useContext, useReducer, useEffect} from 'react';
import {reducer} from "../REDUCER/Reducer"

const Appcontext = React.createContext();
export const AppProvider = ({children}) => {
    const initialstate ={
        confirmed:0,
        deaths:0,
        recovered:0,
        countries:[],
        lastUpdate:'',
        dataforchart:[]

    }
    const [state, dispatch] = useReducer(reducer, initialstate);
    const fetchingdata = async() =>{
        dispatch({type: 'LOADING'});
        
            const responseapi = await fetch('https://covid19.mathdro.id/api');
            const {confirmed, deaths, recovered, lastUpdate} = await responseapi.json();
            const rescountries = await fetch("https://covid19.mathdro.id/api/countries");
            const countries = await rescountries.json();
            const chartresponse = await fetch("https://covid19.mathdro.id/api/daily");
            const chartdatas = await chartresponse.json();
            let dataforchart = chartdatas.map((data)=>  ({confirmed: data.confirmed.total, deaths: data.deaths.total, date: data.reportDate}));
            dispatch({type: 'DISPLAY',payload: {confirmed, deaths, recovered, lastUpdate, countries, dataforchart }});
        
    }
    const fetchingotherdata = async(data)=>{
        dispatch({type:'LOADING'});
        if(data == 'all'){
            fetchingdata();
            return ;
        }
        const responsesingledata = await fetch(`https://covid19.mathdro.id/api/countries/${data}`);
        const {confirmed, deaths, recovered, lastUpdate} = await responsesingledata.json();
        // console.log(confirmed, deaths, recovered, lastUpdate);
        dispatch({type:'DISPLAY_SINGLE_DATA', payload:{confirmed, deaths, recovered, lastUpdate}})
        
    }
    useEffect(()=>{
       
        fetchingdata();
        

    },[])

  return (
    <Appcontext.Provider
        value={{
            ...state,
            fetchingdata,
            fetchingotherdata
        }}
    >
        {children}
    </Appcontext.Provider>
  )
}
export const useGlobalcontext =()=>{
    return useContext(Appcontext)
}

