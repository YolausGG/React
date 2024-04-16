import { useEffect, useState } from "react"
import Episode from "../components/Episode"
import flecha from '../images/flecha.webp'

function Episodes() {

  const [dataAPI, setDataAPI] = useState({
    info: {},
    results: []
  })
  const [numPage, setNumPage] = useState(1)

  useEffect(() => {
    loadEpisodes(`https://rickandmortyapi.com/api/episode`)
  }, [])

  const prevPage = () => {
    if (dataAPI.info.prev != null) {
      setNumPage(numPage - 1)
      loadEpisodes(dataAPI.info.prev)
    }
  }
  const nextPage = () => {
    if (dataAPI.info.next != null) {
      setNumPage(numPage + 1)
      loadEpisodes(dataAPI.info.next)
    }
  }

  const loadEpisodes = (dir) => {
    fetch(dir)
      .then(response => response.json())
      .then(data => {
        setDataAPI(data)
      })
  }

  const changeSearchEpisode = () => {
    const busquedaName = document.getElementById('inp-search-episode-name')
    const busquedaEpisode = document.getElementById('inp-search-episode-episode')
    setNumPage(1)
    loadEpisodes(`https://rickandmortyapi.com/api/episode/?name=${busquedaName.value}&episode=${busquedaEpisode.value}`)
  }
  return (
    <div className="main-container">
      <h2>Episodes</h2>
      <div className='nav-container container-pagination'>
        <img className='img-atras' src={flecha} alt="atras" onClick={prevPage} />
        <strong className='num-page'>{numPage}</strong>
        <img className='img-adelante' src={flecha} alt="adelante" onClick={nextPage} />
      </div>
      <div className='container-filters'>
        <input onChange={changeSearchEpisode} className="inp-search" id='inp-search-episode-name' type="text" placeholder='Name' />
        <input onChange={changeSearchEpisode} className="inp-search" id='inp-search-episode-episode' type="text" placeholder='Episode: "S01E10"' />
      </div>
      <section className="cards-container">
        {dataAPI.results?.map(epi => (
          <Episode key={epi.id} episode={epi} />
        ))}
      </section>
    </div>
  )
}

export default Episodes