import { useState } from "react";
import { getCoordsFromCity } from "../api/getCoordsFromCity";
import {getForecast} from "../api/getForecast";
import '../styles/Search.css';

const Search = ({setCity}) => {
    const[query,setQuery]=useState('');
    

    const handleSearch=async()=>{
        setCity(query);
        // const res=await getCoordsFromCity({name:query})
        // console.log(res);
        // // const results=res.results;
        // // const city=res.results[0];
        // const {results:[city]}=res;  //return 1st value of array wahi sabse related hogi
        // console.log(city);
        // if(city){
        //     const {geometry:{lat,lng}}=city;
        //     console.log({latitude:lat,longitude:lng});  //lat and long nikal rahe h 

        //     const weather=await getForecast({latitude:lat,longitude:lng})
        //     console.log(weather);
        // }else{
        // window.alert("city not found")
        // }
        
    }
    return (
        <div className="Search">
            <label className="Search__label">
                <input type="text" className="Search__input" />
            </label>
            <button className="Search__button">Search</button>
           
        </div>
      );
}
 
export default Search;