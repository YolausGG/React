import { useEffect, useState } from "react"
import Location from "../components/Location"
import flecha from '../images/flecha.webp'

function Locations() {
  const [dataAPI, setDataAPI] = useState({
    info: {},
    results: []
  })
  const [numPage, setNumPage] = useState(1)
  useEffect(() => {
    loadLocations('https://rickandmortyapi.com/api/location')
  }, [])

  const prevPage = () => {
    if (dataAPI.info.prev != null) {
      setNumPage(numPage - 1)
      loadLocations(dataAPI.info.prev)
    }
  }
  const nextPage = () => {
    if (dataAPI.info.next != null) {
      setNumPage(numPage + 1)
      loadLocations(dataAPI.info.next)
    }
  }

  const loadLocations = (dir) => {
    fetch(dir)
      .then(response => response.json())
      .then(data => {
        setDataAPI(data)
      })
  }

  const changeSearchLocation= () => {
    const busquedaName = document.getElementById('inp-search-location-name')
    const busquedaType = document.getElementById('inp-search-location-type')
    const busquedaDimension = document.getElementById('inp-search-location-dimension')
    setNumPage(1)
    loadLocations(`https://rickandmortyapi.com/api/location/?name=${busquedaName.value}&type=${busquedaType.value}&dimension=${busquedaDimension.value}`)
  }

  return (
    <div className="main-container">
      <h2>Locations</h2>
      <div className='nav-container container-pagination'>
        <img className='img-atras' src={flecha} alt="atras" onClick={prevPage} />
        <strong className='num-page'>{numPage}</strong>
        <img className='img-adelante' src={flecha} alt="adelante" onClick={nextPage} />
      </div>
      <div className='container-filters'>
        <input onChange={changeSearchLocation} className="inp-search" id='inp-search-location-name' type="text" placeholder='Name' />
        <input onChange={changeSearchLocation} className="inp-search" id='inp-search-location-type' type="text" placeholder='Type' />
        <input onChange={changeSearchLocation} className="inp-search" id='inp-search-location-dimension' type="text" placeholder='Dimension' />
      </div>
      <section className="cards-container">
        {dataAPI.results?.map(ubi => (
          <Location key={ubi.id} ubi={ubi} />
        ))}
      </section>
    </div>
  )
}

export default Locations