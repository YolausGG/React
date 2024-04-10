import { useEffect, useState } from 'react'
import Character from '../components/Character'
import flecha from '../images/flecha.webp'

function Home() {
    //const [characters, setCharacters] = useState([])
    const [dataAPI, setDataAPI] = useState({
        info: {},
        results: []
    })
    const [numPage, setNumPage] = useState(1)

    useEffect(() => {
        loadCharacters(`https://rickandmortyapi.com/api/character`)
    }, [])

    const prevPage = () => {
        if (numPage == 1) {
            /*setNumPage(dataAPI.info.pages)
            loadCharacters(`https://rickandmortyapi.com/api/character/?page=${dataAPI.info.pages}`)
            */
        } else {
            setNumPage(numPage - 1)
            loadCharacters(dataAPI.info.prev)
        }
    }
    const nextPage = () => {
        if (numPage == dataAPI.info.pages) {
            /*setNumPage(1)
            loadCharacters('https://rickandmortyapi.com/api/character')
            */
        } else {
            setNumPage(numPage + 1)
            loadCharacters(dataAPI.info.next)
        }
    }

    const loadCharacters = (dir) => {

        fetch(dir)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDataAPI(data)
                //setCharacters(data.results)
                
            })
            .catch(function (error) {
                console.log("Hubo un problema con la petición Fetch:" + error.message);
            })
    }

    const changeSearchName = () => {
        const busqueda = document.getElementById('inp-search-character')
        const status = document.getElementById('select-status')

        setNumPage(1)

        console.log(status.value);
        if (status.value == 'all') {
            loadCharacters(`https://rickandmortyapi.com/api/character/?name=${busqueda.value}`)
        }
        else {
            loadCharacters(`https://rickandmortyapi.com/api/character/?name=${busqueda.value}&status=${status.value}`)
        }

    }

    return (
        <div className="main-container">
            <h1>Rick and Morty API</h1>

            <div className='nav-container'>
                <img className='img-atras' src={flecha} alt="atras" onClick={prevPage} />
                <strong className='num-page'>{numPage}</strong>
                <img className='img-adelante' src={flecha} alt="adelante" onClick={nextPage} />
            </div>
            <div className='container-filters'>
                <input onChange={changeSearchName} id='inp-search-character' type="text" placeholder='Nombre' />

                <select onChange={changeSearchName} name="status" id="select-status">
                    <option id='op-all' value="all">Todos</option>
                    <option id='op-alive' value="alive">Vivo</option>
                    <option id='op-dead' value="dead">Muerto</option>
                    <option id='op-unknown' value="unknown">Desconocido</option>
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