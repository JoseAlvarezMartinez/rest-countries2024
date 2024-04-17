import React from 'react'

const CountryCard = ({ countryData }) => {
    const { flags: { png: countryImage }, name: { common }, flags: { alt }, population, subregion, capital } = countryData

    return (
        <div>
            <img src={countryImage} alt={alt} />
            <h2>{common}</h2>
            {subregion && <h3>Region: {subregion} <span></span></h3>}
            {population && <h3>Population: {population} <span></span></h3>}
            {capital && <h3>Capital: {capital} <span></span></h3>}
        </div>
    )
}

export default CountryCard