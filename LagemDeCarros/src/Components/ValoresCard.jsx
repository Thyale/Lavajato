import ValoresImg from "./ValoresImg"

function ValoresCard({valor, nome, descp, info1, info2, info3, info4}) {
    return (
      <div className="DivValoresCard">
          <div>
            <h1>{valor}</h1>
            <h2>{nome}</h2>
            <p>{descp}</p>
            <ul>
                <li><ValoresImg/>{info1}</li>
                <li><ValoresImg/>{info2}</li>
                <li><ValoresImg/>{info3}</li>
                <li><ValoresImg/>{info4}</li>
            </ul>
          </div>
          <button>Reservar</button>
      </div>
    )
  }
  
  export default ValoresCard