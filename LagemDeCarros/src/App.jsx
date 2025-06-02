import Card from "./Components/Card"
import Comentarios from "./Components/Comentarios"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Passos from "./Components/Passos"
import Services from "./Components/Services"
import SessaoInicio from "./Components/SessaoInicio"
import ValoresContainer from "./Components/ValoresContainer"

function App() {
  return (
    <div className="DivContainer">
      <Header/>
      <SessaoInicio/>
      <Services/>
      <Card/>
      <ValoresContainer/>
      <Passos/>
      <Comentarios/>
      <Footer/>
    </div>
  )
}

export default App
