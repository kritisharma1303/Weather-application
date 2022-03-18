import React,{useEffect,useState} from 'react';
import { getForecast } from './api/getForecast';
import Search from './components/Search';
import {Toaster} from "react-hot-toast";
import Loader from "./layout/Loader";
import './styles/App.css'
import Forecast from './components/Forecast';
import { getCityFromCoords } from './api/getCityFromCoords';
import CurrentWeather from './components/CurrentWeather';


const App=()=> {
  const [loader, setLoader] = useState(false);
  const [city, setCity] = useState('city');
  const [location, setLocation] = useState(null);
  const [weatherforecast, setWeatherForecast] = useState(null);
  console.log(city);

  useEffect(()=>{

    const handleSearch=()=>{
    //make the req to opencage to get coords of the query 
    //make the req to weather api to et the weather
    setWeatherForecast(forecast)
  } 

  
  },[city])
  useEffect(() => {
    const locationSuccess=async ({coords:{latitude,longitude}})=>{
      setLoader(true)
      const address=await getCityFromCoords({latitude,longitude})
      setLocation(address.results[0].components)
      console.log(address);
      const forecast=await getForecast({latitude,longitude})
      setLoader(false)
      setWeatherForecast(forecast)

      console.log(forecast)
    }
      
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(locationSuccess)
    }
    else{
        alert("Your browser doesn't support geolocation")
    }
  }, []);
  

  return (
    <div className="App">
     <div className="App_container">
       <Search/>
      {loader &&<Loader/>}

       {weatherforecast && <CurrentWeather weatherInfo={weatherforecast} location={location}/>}

      {weatherforecast &&
        weatherforecast.daily.map(d=>(
          <Forecast location={location} weatherInfo={d}/>
        ))
      } 
      {/* if weatherforecast is not null the render this function */}
      </div>
    
    </div>
  );
}

export default App;
