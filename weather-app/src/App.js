import React,{useEffect} from 'react';
import { getForecast } from './api/getForecast';
import Search from './components/Search';
import {Toaster} from "react-hot-toast";


const App=()=> {

  useEffect(() => {
    const locationSuccess=async ({coords:{latitude,longitude}})=>{
      const forecast=await getForecast({latitude,longitude})
      console.log(forecast)
    }
      
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(locationSuccess)
    }
    else{
        alert("Your brouser doesn't support geolocation")
    }
    
     
  }, []);
  return (
    <div className="App">
      <Search/>
      
    
    </div>
  );
}

export default App;
