import { useParams } from "react-router-dom"
import { useCallApi, countryRender } from "../../customHooks/useCallApi"
import { useState, useEffect } from "react"

const CountryCardDetail = () => {
  const { countryName } = useParams()
  const countriesData = useCallApi()
  const countryInformation = countryRender(countriesData, countryName)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (countryInformation !== undefined) {
      setLoading(false)
    }
  }, [countryInformation])
  return (
    <div>
      {loading ? "Cargando" : "Informacion"}
    </div>
  )
}

export default CountryCardDetail