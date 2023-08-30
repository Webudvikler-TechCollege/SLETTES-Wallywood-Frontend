import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FilterNavStyle } from "./FilterNav.style"

export const FilterNav = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("http://localhost:4000/genre")
      setData(result.data)
    }
    getData()
  }, [setData])

  return (
    <FilterNavStyle>
      <b>Genre</b>
      <ul>
        {data &&
          data.map((genre) => {
            return (
              <li key={genre.id}>
                <Link to={`/posters/${genre.slug}`}>{genre.title}</Link>
              </li>
            )
          })}
      </ul>

    </FilterNavStyle>
  )
}
