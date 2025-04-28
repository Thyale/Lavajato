import arrow from "../assets/image/ImgArrow.png"
import carro from "../assets/image/ImgSportiveCar.png"

function SessaoInicio() {
    return (
      <div className="SessaoInicio">
        <h1>Seu carro, renovado em minutos. <br></br> Brilho de outro nível.</h1>
        <p>Experimente uma lavagem de alta tecnologia que combina eficiência, sustentabilidade e um acabamento impecável. Agende agora e descubra a nova era da limpeza automotiva.</p>
        <img className="SessaoInicio_ImgCar" src={carro} alt="Imagem De um carro esportivo, para ilustrar" />
        <img className="SessaoInicio_ImgArrow" src={arrow} alt="Seta indicando para deslizar a página" />
      </div>
    )
  }
  
  export default SessaoInicio
  