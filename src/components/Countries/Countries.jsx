import { useEffect, useState } from "react";
import { useCallApi } from "../../customHooks/useCallApi";
import CountryCard from "../CountryCard/CountryCard";
import "./Countries.css"

const Countries = () => {

    const countriesData = useCallApi();
    const [countries, setCountries] = useState(countriesData)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (countriesData.length) {
            setCountries(countriesData)
            setLoading(false)
        }
    }, [countriesData])

    function testing(e) {
        const newCountriesFilter = countriesData.filter(country => country.name.common.toLowerCase().includes(e.toLowerCase()))

        if (newCountriesFilter.length) {
            setCountries(newCountriesFilter)
            setError(false)
        } else {
            setError(true)
        }
    }

    if (loading) return <p>Loading...</p>
    return (
        <main className="home-main">
            <div className="search">
                {/* <HiMagnifyingGlass size={"1.5rem"} color={"rgba(128, 128, 128, 0.548)"} className="search-icon"/> */}
                <input
                    onChange={(e) => testing(e.target.value)}
                    className="input-search" type="text" placeholder="Search for a country..." />
            </div>

            {
                error ?
                    <p>Error en la busqueda</p> :
                    <div className="flex-responsive">
                        {
                            countries.map(countryData => <CountryCard key={countryData.name.common} countryData={countryData} />)
                        }
                    </div>
            }

        </main>
    )
}

export default Countries