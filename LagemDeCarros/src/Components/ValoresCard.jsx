import ValoresImg from "./ValoresImg"
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function ValoresCard({valor, nome, descp, info1, info2, info3, info4,highlighted }) {

  useEffect(() => {
        ScrollReveal().reveal(".DivValoresCard", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: false,
        });
      }, []);


    return (
      <div className={`DivValoresCard ${highlighted ? "highlighted-card" : ""}`}>
      <div>
        <h1>{valor}</h1>
        <h2>{nome}</h2>
        <p>{descp}</p>
        <ul>
          <li><ValoresImg />{info1}</li>
          <li><ValoresImg />{info2}</li>
          <li><ValoresImg />{info3}</li>
          <li><ValoresImg />{info4}</li>
        </ul>
      </div>
      <button>Reservar</button>
    </div>
    )
  }
  
  export default ValoresCard