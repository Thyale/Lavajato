import Servicesinfo from "./Servicesinfo"
import imgInfo1 from "../assets/image/entrega-expressa.png"
import imgInfo2 from "../assets/image/carregando.png"
import imgInfo3 from "../assets/image/certificado-de-garantia.png"
import imgInfo4 from "../assets/image/seco.png"
import imgInfo5 from "../assets/image/interno.png"
import imgInfo6 from "../assets/image/lupa.png"

function Services() {
    return (
      <div id="Services" className="Services">
        <div className="ServicesTitle">
            <h2>Escolha o <strong>Tipo de Lavagem</strong> Perfeito para Seu Carro</h2>
            <p>Cada carro tem uma necessidade diferente — e nós temos o serviço ideal para atender cada uma delas. Descubra nossos tipos de lavagem e surpreenda-se com o resultado.</p>
        </div>
        <div className="ServicesContainer">
            <div>
                <Servicesinfo img={imgInfo1} name="Lavagem Express" description="Limpeza externa rápida e eficiente para quem não quer perder tempo. Seu carro limpo em poucos minutos."/>
                <Servicesinfo img={imgInfo2} name="Lavagem Completa" description="Cuidado total por dentro e por fora. Inclui limpeza externa, aspiração interna, painéis polidos e acabamento premium."/>
                <Servicesinfo img={imgInfo3} name="Lavagem Premium" description="Uma experiência de alto padrão: limpeza profunda, enceramento especial e proteção extra para a pintura."/>
                <Servicesinfo img={imgInfo4} name="Lavagem a Seco" description="Tecnologia sustentável que economiza até 98% de água. Limpeza detalhada sem agredir o meio ambiente."/>
                <Servicesinfo img={imgInfo5} name="Higienização Interna" description="Remoção de manchas, odores e microorganismos. Deixe seu interior renovado, limpo e mais saudável."/>
                <Servicesinfo img={imgInfo6} name="Lavagem Detailing" description="O nível máximo de cuidado. Polimento, descontaminação da pintura e atenção a cada milímetro do seu carro."/>
            </div>
        </div>
      </div>
    )
  }
  
  export default Services
  