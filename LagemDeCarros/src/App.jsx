import Card from "./Components/Card"
import Comentarios from "./Components/Comentarios"
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
    </div>
  )
}

export default App
