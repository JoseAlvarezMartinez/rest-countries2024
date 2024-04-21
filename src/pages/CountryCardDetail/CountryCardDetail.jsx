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

      {countryInformation.name.common}
    </div>
  )
}

export default CountryCardDetail