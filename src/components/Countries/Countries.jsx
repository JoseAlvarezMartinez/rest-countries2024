import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState, useEffect } from "react";
import "./Countries.css"
import CountryCard from "../CountryCard/CountryCard";

const Countries = () => {

    const [countriesData, setCountriesData] = useState([])
    const url = "https://restcountries.com/v3.1/all"
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Error al obtener los datos")
                }
                const data = await response.json()
                setCountriesData(data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    }, [])

    return (
        <main>
            <div className="search">
                {/* <HiMagnifyingGlass size={"1.5rem"} color={"rgba(128, 128, 128, 0.548)"} className="search-icon"/> */}
                <input className="input-search" type="text" placeholder="Search for a country..." />
            </div>

            {countriesData.map(countryData => <CountryCard key={countryData.name.common} countryData={countryData} />)}
        </main>
    )
}

export default Countries