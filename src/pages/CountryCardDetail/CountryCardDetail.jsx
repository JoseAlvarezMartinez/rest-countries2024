import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"
import { useCallApi, countryRender } from "../../customHooks/useCallApi"
import { useState, useEffect } from "react"

const CountryCardDetail = () => {
  const { countryName } = useParams()
  const [loading, setLoading] = useState(true)
  const countriesData = useCallApi()
  const countryInformation = countryRender(countriesData, countryName)

  useEffect(() => {
    if (countriesData.length) {
      setLoading(false)
    }
  }, [countriesData])

  if (loading) return <CircularProgress color="inherit" />
  return (
    <div>
      <p>{countryInformation.name.common}</p>
    </div>
  )
}

export default CountryCardDetail