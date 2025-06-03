import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Servicesinfo({img,name,description}) {

  useEffect(() => {
        ScrollReveal().reveal(".Servicesinfo", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: false,
        });
      }, []);
      
    return (
      <div className="Servicesinfo">
        <img src={img}/>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    )
  }
  
  export default Servicesinfo
  