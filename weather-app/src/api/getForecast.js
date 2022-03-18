import axios from 'axios';
import toast from "react-hot-toast";

const api_key='94e39b9feb4341f261a21df09d1d39d2';

export const getForecast =async({longitude,latitude})=>{
   try {
    const res=await axios.get('https://api.openweathermap.org/data/2.5/onecall',{
      params:{
        lat:latitude,
        lon:longitude,
        appid:api_key,
        exclude:"minutely,hourly,akerts",
        units:"metric"
      }
    })
    toast.success("fetched weather")
    return res.data;
     
   } catch (error) {
     console.log(error);
     toast.error(error.message)
     return null;
   }
}