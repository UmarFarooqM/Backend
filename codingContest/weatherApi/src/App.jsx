import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'



function App() {

    const [city, setcity] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] =  useState("");


    const api_key = import.meta.env.weather_api

    useEffect(()=>{
      
      if(!searchCity) return;

      setLoading(true);
      setError("");
      setData(null);

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${``}&units=metric`).
      then((res)=> setData(res.data)).catch((err)=>{
        setError("City not found")
      }).finally(()=> setLoading(false));

    },[searchCity]);

    const handleSubmit = (e)=> {

      e.preventDefault();
      if(city.trim())
         setSearchCity(city.trim())
    }

  return (
    <>
    <div >
    <h1> Weather Search</h1>

    <form onSubmit={handleSubmit}>

      <input  type='text' placeholder='enter cityname' value={city} onChange={(e) => setCity(e.target.value)}
      />

      <button type='submit'> Search </button>
     
    </form>
    {loading && <p> Loading....</p>}
    {error && <p> {error}</p>}


    {data && (
      <div >

        <h2> {data.name}</h2>
        <p> {data.main.temp}</p>
        <p> {data.weather[0].main}</p>
        {/* <img src="" alt="" /> */}
      </div>
    )}
    
    
    

    </div>
     
    </>
  )
}

export default App;
