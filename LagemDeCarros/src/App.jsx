import Card from "./Components/Card"
import Header from "./Components/Header"
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
    </div>
  )
}

export default App
