import Character  from './components/Character';
import Navbar  from './components/Narbar';
import Presentacion from './components/Presentacion';

// public marvel key: aebd629caad7ca6e0f5230700a96849b 
// private marvel key b4dc56e1f8843b59e18c6c1cd75759fd82aa30a3
function App() {

  return (
    <>
      <Navbar/>
      <Presentacion/>
      <Character/>
    </>
  )
}

export default App
