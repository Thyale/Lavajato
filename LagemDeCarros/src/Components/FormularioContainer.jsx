import Formulario from "./Formulario"

function FormularioContainer() {
    return (
      <div id="FormularioContainer" className="FormularioContainer">
        <div>
            <h1>Agende agora<strong><br />Em poucos cliques</strong></h1>
            <p>Preencha o formulário abaixo e escolha o melhor horário pra você.Simples, rápido e sem burocracia — tudo o que você precisa para garantir seu atendimento está logo aqui.</p>
        </div>
        <Formulario/>
      </div>
    )
  }
  
  export default FormularioContainer
  