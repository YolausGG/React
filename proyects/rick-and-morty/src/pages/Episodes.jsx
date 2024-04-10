import { useEffect, useState } from "react"
import Episode from "../components/Episode"

function Episodes() {

  const [dataApi, setDataAPI] = useState({
    info: {},
    results: []
  })


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then(response => response.json())
      .then(data => {
        setDataAPI(data)
        console.log(data)
      })

  }, [])

  return (
    <div className="main-container">
      <h2>Episodios</h2>
      <section className="cards-container">
        {dataApi.results?.map(epi => (
          <Episode key={epi.id} episode={epi}/> 
        ))}
      </section>
    </div>
  )
}

export default Episodes