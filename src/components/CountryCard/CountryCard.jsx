import { Link } from "react-router-dom"

const CountryCard = ({ countryData }) => {
    const { flags: { png: countryImage }, name: { common }, flags: { alt }, population, region, capital } = countryData

    return (
        <Link to={`country/${common}`}>
            <img src={countryImage} alt={alt} />
            <h2>{common}</h2>
            {region && <h3>Region: {region} <span></span></h3>}
            {population && <h3>Population: {population} <span></span></h3>}
            {capital && <h3>Capital: {capital} <span></span></h3>}
        </Link>
    )
}

export default CountryCard