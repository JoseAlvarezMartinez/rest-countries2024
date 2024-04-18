import { useState, useEffect } from "react";
export function useCallApi() {
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


    return countriesData
}

export const countryRender = (countriesArray,id) => countriesArray.find(countryData => countryData.name.official === id)