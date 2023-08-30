import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PosterDetailsStyle } from "./PosterDetails.style"
import AddToCartButton from "../../Cart/CartButton/AddToCartButton"
import { useAuth } from "../../../App/Auth/Auth"

export const PosterDetails = () => {
  const [data, setData] = useState([])
  const { poster } = useParams()
  const { loginData } = useAuth()

  useEffect(() => {
    const getData = async () => {
      const endpoint = `http://localhost:4000/poster/details/${poster}`
      const result = await axios.get(endpoint)
      setData(result.data)
    }
    getData()
  }, [poster])

  return (
    <PosterDetailsStyle>
      {data && (
        <>
          <div>
            <figure>
              <img src={data.image} alt={data.name}></img>
            </figure>
          </div>
          <div>
            <h2>{data.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
            <p>Mål: {`${data.width} x ${data.height} cm`}</p>
            <p>Varenummer: {data.id}</p>
            <h3>Pris: {data.price},00 DKK</h3>
            {loginData && (
              <AddToCartButton id={data.id}>Læg i kurv</AddToCartButton>
            )}
          </div>
        </>
      )}
    </PosterDetailsStyle>
  )
}
