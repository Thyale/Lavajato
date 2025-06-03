import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Card() {

  useEffect(() => {
        ScrollReveal().reveal(".titulocard", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: false,
        });
      }, []);

  return (
    <div className="CardContainer">
        <div className="Card">
            <h2 className="titulocard">Tecnologia <br></br><strong>Sustentável</strong><br></br> que Transforma</h2>
            <div>
               <p className="CardDiv_Txt1">Nossa lavagem ecológica com nanotecnologia representa o futuro do cuidado automotivo. Utilizamos produtos inteligentes que atuam em nível molecular, removendo sujeiras com precisão e sem agredir a pintura. O resultado é uma limpeza profunda, brilho duradouro e proteção extra para o seu veículo.</p>
               <p className="CardDiv_Txt2">Além da eficiência, somos comprometidos com o meio ambiente. Reduzimos drasticamente o consumo de água e evitamos o uso de produtos químicos agressivos. É a escolha ideal para quem valoriza tecnologia, performance e sustentabilidade em cada detalhe.</p>
               <button>Saiba Mais</button>
            </div>
        </div>
    </div>
  )
}

export default Card
