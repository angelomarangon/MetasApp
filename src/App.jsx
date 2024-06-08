import './App.css'
import Encabezado from './components/compartidos/Encabezado'
import Principal from './components/compartidos/Principal'
import Footer from './components/compartidos/Footer'
import Lista from './components/lista/Lista'
import Detealles from './components/nueva/Detalles'

function App() {


  return (
    <>
      <Encabezado />
      <Principal>
        {/* <Lista/> */}
        <Detealles />
      </Principal>
      <Footer />
    </>
  )
}

export default App
