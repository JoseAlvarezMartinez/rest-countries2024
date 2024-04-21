import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"
import { useCallApi } from "../../customHooks/useCallApi"
import { useState, useEffect } from "react"

const CountryCardDetail = () => {
  const { countryName } = useParams()
  const [loading, setLoading] = useState(true)
  const { countryRender } = useCallApi()
  const countryInformation = countryRender(countryName) ?? {}

  useEffect(() => {
    if (Object.keys(countryInformation).length) {
      setLoading(false)
    }
  }, [countryInformation])

  if (loading) return <CircularProgress color="inherit" />
  return (
    <div>
      <img src={countryInformation.flags.png} alt="" />
      <h2>{countryInformation.name.common}</h2>
      <h3>Native Name: <span>{countryInformation.name.nativeName[Object.keys(countryInformation.name.nativeName)[0]].official}</span></h3>
      <h3>Population: <span>{countryInformation.population}</span></h3>
      <h3>Region: <span>{countryInformation.region}</span></h3>
      <h3>Sub Region: <span>{countryInformation.subregion}</span></h3>
      <h3>Capital: <span>{countryInformation.capital}</span></h3>
      <h3>Top Level Domain: <span>{countryInformation.tld}</span></h3>
      <h3>Currencies: <span>{countryInformation.currencies[Object.keys(countryInformation.currencies)[0]].name}</span></h3>
      {/* {
        countryInformation.languages.map(language =>  <h3>Idioma</h3>)
      }
      <h3>Languages: </h3> */}

    </div>
  )
}

export default CountryCardDetail