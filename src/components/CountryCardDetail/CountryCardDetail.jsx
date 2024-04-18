import { useParams } from "react-router-dom"
import { useCallApi, countryRender } from "../../customHooks/useCallApi"
import { useEffect } from "react"
const CountryCardDetail = () => {

  const countriesData = useCallApi()
  const { countryName } = useParams()

  const countryInfo = countryRender(countriesData, countryName)
  return (
    <div>
      <h2>Detalles</h2>
    </div>
  )
}

export default CountryCardDetail