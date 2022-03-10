import { useState } from "react";
import { getCoordsFromCity } from "../api/getCoordsFromCity";
import {getForecast} from "../api/getForecast";

const Search = () => {
    const[query,setQuery]=useState(0);

    const handleSearch=async()=>{
        console.log(query);
        const res=await getCoordsFromCity({name:query})
        console.log(res);
        // const results=res.results;
        // const city=res.results[0];
        const {results:[city]}=res;  //return 1st value of array wahi sabse related hogi
        console.log(city);
        if(city){
            const {geometry:{lat,lng}}=city;
            console.log({latitude:lat,longitude:lng});  //lat and long nikal rahe h 

            const weather=await getForecast({latitude:lat,longitude:lng})
            console.log(weather);
        }else{
        window.alert("city not found")
        }
        
    }
    return (
        <div>
            <input onChange={(e)=>setQuery(e.target.value)} type="text" name="" id="" />
            <button onClick={handleSearch}>search</button>
        </div>
      );
}
 
export default Search;