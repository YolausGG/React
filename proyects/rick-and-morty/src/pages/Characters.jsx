import { useEffect, useState } from 'react'
import Character from '../components/Character'
import flecha from '../images/flecha.webp'

function Home() {
    const [dataAPI, setDataAPI] = useState({
        info: {},
        results: []
    })
    const [numPage, setNumPage] = useState(1)

    useEffect(() => {
        loadCharacters(`https://rickandmortyapi.com/api/character`)
    }, [])

    const prevPage = () => {
        if (dataAPI.info.prev != null) {
            setNumPage(numPage - 1)
            loadCharacters(dataAPI.info.prev)
        }
    }
    const nextPage = () => {
        if (dataAPI.info.next != null) {
            setNumPage(numPage + 1)
            loadCharacters(dataAPI.info.next)
        }
    }

    const loadCharacters = (dir) => {
        fetch(dir)
            .then(response => response.json())
            .then(data => {
                setDataAPI(data)
            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })
    }

    const changeSearchCharacter = () => {
        const busquedaName = document.getElementById('inp-search-character-name')
        const busquedaSpecies = document.getElementById('inp-search-character-species')
        const busquedaType = document.getElementById('inp-search-character-type')
        const status = document.getElementById('select-status')

        setNumPage(1)
        loadCharacters(`https://rickandmortyapi.com/api/character/?name=${busquedaName.value}&status=${status.value}&species=${busquedaSpecies.value}&type=${busquedaType.value}`)
    }

    return (
        <div className="main-container">
            <h1>Rick and Morty API</h1>
            <div className='nav-container container-pagination'>
                <img className='img-atras' src={flecha} alt="atras" onClick={prevPage} />
                <strong className='num-page'>{numPage}</strong>
                <img className='img-adelante' src={flecha} alt="adelante" onClick={nextPage} />
            </div>
            <div className='container-filters'>
                <input onChange={changeSearchCharacter} className='inp-search' id='inp-search-character-name' type="text" placeholder='Name' />
                <input onChange={changeSearchCharacter} className='inp-search' id='inp-search-character-species' type="text" placeholder='Species' />
                <input onChange={changeSearchCharacter} className='inp-search' id='inp-search-character-type' type="text" placeholder='Type' />

                <select required onChange={changeSearchCharacter} defaultValue={""} name="status" id="select-status">
                    <option value="" disabled hidden>Status</option>
                    <option id='op-all' value="">All</option>
                    <option id='op-alive' value="alive">Alive</option>
                    <option id='op-dead' value="dead">Dead</option>
                    <option id='op-unknown' value="unknown">Unknown</option>
                </select>
            </div>
            <section className="cards-container">
                {dataAPI.results?.map(character => (
                    <Character key={character.id} character={character} />
                ))}
            </section>
        </div>
    )
}

export default Home