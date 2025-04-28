import Logo from "../assets/Logo/Logo.png"
function Header() {
    return (
      <div className="header">
        <img src={Logo} alt="" />
        <button>Agendar Lavagem</button>
      </div>
    )
  }
  
  export default Header
  