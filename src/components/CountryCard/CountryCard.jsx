import { Link } from "react-router-dom"
import "./CountryCard.css"
const CountryCard = ({ countryData }) => {
    const { flags: { png: countryImage }, name: { official }, flags: { alt }, population, region, capital } = countryData
    return (
        <article className="country-card-container">
            <Link className="country-card-anchor" to={`/${official}`}>
                <img className="country-card-image" src={countryImage} alt={alt} />
                <div className="country-card-texts">
                    <h2 className="country-card-title">{official}</h2>
                    {population && <h3>Population: {population} <span></span></h3>}
                    {region && <h3>Region: {region} <span></span></h3>}
                    {capital && <h3>Capital: {capital} <span></span></h3>}
                </div>
            </Link>
        </article>
    )
}

export default CountryCard