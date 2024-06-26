import { useEffect, useState } from "react";
import { useCallApi } from "../../customHooks/useCallApi";
import CountryCard from "../../components/CountryCard/CountryCard"
import "./Home.css"
const Home = () => {

  const { countriesData } = useCallApi();
  const [countries, setCountries] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (countriesData.length) {
      setCountries(countriesData)
      setLoading(false)
    }
  }, [countriesData])

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      const newCountriesFilter = countriesData.filter(country => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
      if (newCountriesFilter.length) {
        setCountries(newCountriesFilter)
        setError(false)
      } else {
        setError(true)
      }
    }
  }

  if (loading) return <p>Loading...</p>
  return (
    <>
      <header className="header-container">
        <h1 className={`header-h1`}>Where in the world?</h1>
      </header >
      <main className="home-main">
        <div className="search">
          <input
            onKeyDown={e => handleKeyDown(e)}
            className="input-search" type="text" placeholder="Search for a country..." />
        </div>

        {
          error ?
            <p>No se encontraron paises con ese nombre</p> :
            <div className="flex-responsive">
              {
                countries.map(countryData => <CountryCard key={countryData.name.common} countryData={countryData} />)
              }
            </div>
        }

      </main>
    </>
  )
}

export default Home