import "./CountryCardDetail.css"
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"
import { useCallApi } from "../../customHooks/useCallApi"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';

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

    <>

      <div className="country-card-detail-container">
        <Link className='back-button' to="/">Back</Link>
        <div className="detail-information-container">
          <img className="detail-image" src={countryInformation.flags.png} alt="" />
          <div className="detail-texts">
            <h2 className="detail-name">{countryInformation.name.common}</h2>
            <h3>Native Name: <span className="detail-info">{countryInformation.name.nativeName[Object.keys(countryInformation.name.nativeName)[0]].official}</span></h3>
            <h3>Population: <span className="detail-info">{countryInformation.population}</span></h3>
            <h3>Region: <span className="detail-info">{countryInformation.region}</span></h3>
            <h3>Sub Region: <span className="detail-info">{countryInformation.subregion}</span></h3>
            <h3>Capital: <span className="detail-info">{countryInformation.capital}</span></h3>

            <section className="detail-lower">
              <h3>Top Level Domain: <span className="detail-info">{countryInformation.tld}</span></h3>
              <h3>Currencies: <span className="detail-info">{countryInformation.currencies[Object.keys(countryInformation.currencies)[0]].name}</span></h3>
            </section>
          </div>
          {/* {
        countryInformation.languages.map(language =>  <h3>Idioma</h3>)
      }
      <h3>Languages: </h3> */}

        </div>
      </div>
    </>

  )
}

export default CountryCardDetail