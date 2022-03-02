import axios from 'axios';
import './App.css';
import React,{useEffect} from 'react';



const App=()=> {

  useEffect(() => {

    const api_key='94e39b9feb4341f261a21df09d1d39d2';

    const getWeatherFromCoords=async ({longitude,latitude})=>{
      const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)

      console.log(res);
      const data=await res.json()
      console.log(data);
    }

    const locationSuccess=({coords:{latitude,longitude}})=>
    {
      getWeatherFromCoords({longitude,latitude})
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
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur officiis quam corporis corrupti aut itaque optio sunt dicta modi, iste esse aspernatur mollitia numquam cupiditate, dolorum assumenda sit veritatis doloribus?
    </div>
  );
}

export default App;
