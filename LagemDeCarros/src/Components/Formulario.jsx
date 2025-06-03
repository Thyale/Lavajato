import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Formulario() {

    useEffect(() => {
        ScrollReveal().reveal(".Formulario", {
          duration: 1000,
          origin: "bottom", 
          distance: "50px", 
          delay: 200, 
          easing: "ease-in-out", 
          reset: false,
        });
      }, []);


    return (
      <div className="Formulario">

        <div className="FormularioCompleto">
            <label htmlFor="nome">Nome</label>
            <input type="text" className="NomeInput" name="nome" id="nome" placeholder="Nome Completo"/>
        </div>

        <div className="FormularioCompleto">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" className="CellInput" name="telefone" id="telefone" placeholder="(XX) X XXXX-XXXX"/>
        </div>

        <div className="FormularioCompleto">
            <label htmlFor="car">Modelo do Carro</label>
            <select id="car" name="car">
                <option value="" selected disabled>Escreva o modelo do carro</option>
                <option value="volvo">Volvo</option>
  <option value="bmw">BMW</option>
  <option value="fiat">Fiat</option>
  <option value="chevrolet">Chevrolet</option>
  <option value="ford">Ford</option>
  <option value="honda">Honda</option>
  <option value="hyundai">Hyundai</option>
  <option value="jeep">Jeep</option>
  <option value="kia">Kia</option>
  <option value="nissan">Nissan</option>
  <option value="peugeot">Peugeot</option>
  <option value="renault">Renault</option>
  <option value="toyota">Toyota</option>
  <option value="volkswagen">Volkswagen</option>
  <option value="outro">Outro</option>
            </select>
        </div>

        <div className="FormularioHorizontal">
            <div>
                <label htmlFor="servico">Tipo de Serviço</label>
                <select id="servico" name="servico">
                    <option value="Pacote Essencial">Essencial</option>
                    <option value="Pacote Premium Detail">Premium Detail</option>
                    <option value="Pacote Completo">Completo</option>
                </select>
            </div>
            <div>
                <label htmlFor="data">Data</label>
                <input type="date" name="data" id="data" />
            </div>
            <div>
                <label htmlFor="horario">Horário</label>
                <select id="horario" name="horario">
                    <option value="10h">10h</option>
                    <option value="10:30h">10:30h</option>
                    <option value="11h">11h</option>
                    <option value="11:30h">11:30h</option>
                    <option value="12h">12h</option>
                    <option value="14h">14h</option>
                    <option value="15h">15h</option>
                </select>
            </div>
        </div>

        <button>Agendar</button>

      </div>
    )
  }
  
  export default Formulario
  