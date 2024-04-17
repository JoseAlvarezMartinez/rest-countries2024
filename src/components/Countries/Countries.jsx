import { HiMagnifyingGlass } from "react-icons/hi2";
import { useCallApi } from "../../customHooks/useCallApi";
import CountryCard from "../CountryCard/CountryCard";
import "./Countries.css"

const Countries = () => {

    const countriesData = useCallApi();

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