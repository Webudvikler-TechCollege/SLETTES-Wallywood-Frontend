import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useAuth } from "../../../App/Auth/Auth"
import AddToCartButton from "../../Cart/CartButton/AddToCartButton"
import { PosterListStyle } from "./PosterList.style"

export const PosterList = () => {
  const [data, setData] = useState([])
  let { genre } = useParams()
  const { loginData } = useAuth()

  useEffect(() => {
    const getData = async () => {
      const endpoint = `http://localhost:4000/poster/list/${genre}`
      const result = await axios.get(endpoint)
      setData(result.data)
    }
    getData()
  }, [genre])

  return (
    <PosterListStyle>
      {data &&
        data.map((poster) => {
          return (
            <div key={poster.id}>
              <figure>
                <Link to={`/posters/details/${poster.slug}`}>
                  <img src={poster.image} alt={poster.name} title={poster.name} />
                </Link>
              </figure>
              <h3>{poster.name}</h3>
              <p>DKK {poster.price},00</p>
              {loginData &&             
                <p><AddToCartButton id={poster.id}>Læg i kurv</AddToCartButton></p>
              }
            </div>
          )
        })}
    </PosterListStyle>
  )
}
