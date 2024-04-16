import './styles/app.css'
import './styles/dataCharacter.css'
import './styles/dataLocation.css'
import './styles/dataEpisode.css'
import { Route, Routes } from 'react-router-dom'

import Characters from './pages/Characters'
import DataCharacter from './pages/DataCharacter'
import DataLocation from './pages/DataLocation'
import NavBar from './components/NavBar'
import Locations from './pages/Locations'
import Episodes from './pages/Episodes'
import DataEpisode from './pages/DataEpisode'


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/characters' element={<Characters />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/episodes' element={<Episodes />} />

        <Route path='/character/:id' element={<DataCharacter />} />
        <Route path='/location/:id' element={<DataLocation />} />
        <Route path='/episode/:id' element={<DataEpisode />} />
        <Route path='/*' element={<Characters />} />
      </Routes>
    </>
  )
}

export default App
