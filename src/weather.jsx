import { useState } from "react"
import axios from "axios"

function Weather() {
    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    function handleCity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var weatherData = axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98dae9d010f7a82b072174b4d3ea0210`
        )
        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdesc(success.data.weather[0].description)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-sky-400 to-blue-100 p-6">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-2xl w-full max-w-md text-white animate-fade-in transition-all duration-700">
                <h1 className="text-3xl font-extrabold text-center mb-4 animate-pulse text-blue-800 drop-shadow-lg"> SkyCheck</h1>
                <p className="text-center text-sm mb-4">What’s the weather like there? I’ll tell you!</p>
                <input
                    type="text"
                    className="w-full px-4 py-2 mb-4 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your city name"
                    value={city}
                    onChange={handleCity}
                />
                <button
                    onClick={getWeather}
                    className="w-full bg-blue-900 hover:bg-blue-500 transition-all duration-300 text-white font-semibold py-2 rounded-md"
                >
                    Get Report
                </button>
                <div className="mt-6 space-y-2 text-center text-blue-950">
                    <h1><b>Weather:</b> {weather}</h1>
                    <h1><b>Temperature:</b> {temp} K</h1>
                    <h1><b>Description:</b> {desc}</h1>
                </div>
            </div>
        </div>
    )
}

export default Weather;
