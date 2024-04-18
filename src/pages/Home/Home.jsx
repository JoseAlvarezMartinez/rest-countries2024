import Countries from "../../components/Countries/Countries"
import Header from "../../components/Header/Header"
import { Outlet } from "react-router-dom"
const Home = () => {
  return (
    <>
      <Header />
      <Countries />
    </>
  )
}

export default Home