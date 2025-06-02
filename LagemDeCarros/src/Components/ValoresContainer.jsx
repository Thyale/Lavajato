import ValoresCard from "./ValoresCard"

function ValoresContainer() {
  return (
    <div className="DivValoresContainer">
        <div className="DivValoresContainerTexto">
            <h2>Escolha o <strong>Pacote Ideal</strong> para Seu Carro</h2>
            <p>Nossos pacotes foram pensados para oferecer o melhor custo-benefício com tecnologia de ponta e responsabilidade ambiental. Todos os serviços utilizam nanotecnologia e produtos ecológicos para uma limpeza eficiente, segura e sustentável.</p>
        </div>
        <div className="DivValoresContainerCards">
            <ValoresCard valor="R$ 49,90" nome="Pacote Essencial" descp="Para quem busca praticidade no dia a dia." info1="Lavagem a Seco (externa)." info2="Aromatização interna." info3="Limpeza de vidros." info4="Limpeza de rodas."/>
            <ValoresCard valor="R$ 189,90" nome="Pacote Premium Detail" descp="Para quem exige brilho e proteção em nível máximo." info1="Lavagem Premium ecológica (externa e interna)." info2="Higienização total com ozonização." info3="Polimento técnico." info4="Proteção de pintura com Nano Coat." highlighted  />
            <ValoresCard valor="R$ 89,90" nome="Pacote Completo" descp="Cuidado completo por dentro e por fora." info1="Lavagem Completa com nanotecnologia." info2="Higienização de bancos e tapetes." info3="Painel e portas limpos e hidratados." info4="Aromatização premium."/>
        </div>
    </div>
  )
}
//Valor, Nome, Descp, Info1
export default ValoresContainer
