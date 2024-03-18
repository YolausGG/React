import { useState, useEffect } from 'react'
import './App.css'
import Character from './components/Character'

import flecha from './images/flecha.webp'

function App() {
  //const [characters, setCharacters] = useState([])
  const [dataAPI, setDataAPI] = useState({
    info: {},
    results: []
  })
  const [numPage, setNumPage] = useState(1)
  const [searchCharacter, setSearchCharacter] = useState()

  useEffect(() => {
    loadCharacters(`https://rickandmortyapi.com/api/character`)
  }, [])

  const prevPage = () => {
    if (numPage == 1) {
      setNumPage(dataAPI.info.pages)
      loadCharacters(`https://rickandmortyapi.com/api/character/?page=${dataAPI.info.pages}`)
    } else {
      setNumPage(numPage - 1)
      loadCharacters(dataAPI.info.prev)
    }
  }
  const nextPage = () => {
    if (numPage == dataAPI.info.pages) {
      setNumPage(1)
      loadCharacters('https://rickandmortyapi.com/api/character')
    } else {
      setNumPage(numPage + 1)
      loadCharacters(dataAPI.info.next)
    }
  }

  const loadCharacters = (dir) => {

    fetch(dir)
      .then(
        response => response.json())
      .then(data => {
        setDataAPI(data)
        //setCharacters(data.results)
        console.log(data)
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      })
  }

  const changeSearchName = () => {
    loadCharacters(`https://rickandmortyapi.com/api/character/?name=${searchCharacter}`)
  }

  return (
    <div className="main-container">
      <h1>Rick and Morty API</h1>

      <div className='nav-container'>
        <img className='img-atras' src={flecha} alt="atras" onClick={prevPage} />
        <strong className='num-page'>{numPage}</strong>
        <img className='img-adelante' src={flecha} alt="adelante" onClick={nextPage} />
      </div>
      <div>
        <input onChange={changeSearchName} id='inp-search-character' type="text" placeholder='Nombre' value={searchCharacter} />
      </div>

      <div className="characters-container">
        {dataAPI.results.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>

    </div>
  )
}

export default App
