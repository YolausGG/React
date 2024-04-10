import { useEffect, useState } from "react"
import Location from "../components/Location"


function Locations() {

  const [dataAPI, setDataAPI] = useState({
    info: {},
    results: []
  })

  useEffect(() => {
    loadLocations('https://rickandmortyapi.com/api/location')
  }, [])

  const loadLocations = (dir) => {
    fetch(dir)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setDataAPI(data)

      })
  }

  return (
    <div className="main-container">
      <h2>Ubicaciones</h2>

      <section className="cards-container">
        {dataAPI.results?.map(ubi => (
          <Location key={ubi.id} ubi={ubi} />
        ))}
      </section>

    </div>
  )
}

export default Locations