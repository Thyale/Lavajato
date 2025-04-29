import Card from "./Components/Card"
import Header from "./Components/Header"
import Services from "./Components/Services"
import SessaoInicio from "./Components/SessaoInicio"

function App() {
  return (
    <div className="DivContainer">
      <Header/>
      <SessaoInicio/>
      <Services/>
      <Card/>
    </div>
  )
}

export default App
