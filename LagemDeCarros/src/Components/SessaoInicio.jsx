import arrow from "../assets/image/ImgArrow.png"
import carro from "../assets/image/ImgSportiveCar.png"

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function SessaoInicio() {
  useEffect(() => {
        ScrollReveal().reveal(".SessaoInicio_ImgCar", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: false,
        });
      }, []);

    return (
      <div className="SessaoInicio">
        <h1>Seu carro, renovado em minutos. <br></br><strong>Brilho de outro nível.</strong></h1>
        <p>Experimente uma lavagem de alta tecnologia que combina eficiência, sustentabilidade e um acabamento impecável. Agende agora e descubra a nova era da limpeza automotiva.</p>
        <img className="SessaoInicio_ImgCar" src={carro} alt="Imagem De um carro esportivo, para ilustrar" />
        <img className="SessaoInicio_ImgArrow" src={arrow} alt="Seta indicando para deslizar a página" />
      </div>
    )
  }
  
  export default SessaoInicio
  