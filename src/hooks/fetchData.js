import axios from "axios"
import { useEffect, useState } from "react"

// fetching data using axios
// returning units, loading and error
function fetchData() {
  const [units, setUnits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const url = "https://api.adriatic.hr/test/accommodation"

  useEffect(()=>{
    const getData = async () => {
      try {
        const response = await axios.get(url)
        setUnits(response.data)
        setLoading(false)

      } catch(error){
        setError(`${error}`)
        setLoading(false)
      }
    }
    getData()
  }, [])

  return {units, loading, error}
}

export default fetchData