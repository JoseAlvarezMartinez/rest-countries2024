import { Link } from "react-router-dom"
import "./CountryCard.css"
const CountryCard = ({ countryData }) => {
    const { flags: { png: countryImage }, name: { official }, flags: { alt }, population, region, capital } = countryData
    return (
        <Link className="country-card-anchor" to={`/${official}`}>
            <article className="country-card-container">
                <img className="country-card-image" src={countryImage} alt={alt} />
                <h2 className="country-card-title">{official}</h2>
                {population && <h3>Population: {population} <span></span></h3>}
                {region && <h3>Region: {region} <span></span></h3>}
                {capital && <h3>Capital: {capital} <span></span></h3>}
            </article>
        </Link>
    )
}

export default CountryCard