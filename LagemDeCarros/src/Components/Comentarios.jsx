import ComentariosCard from "./ComentariosCard"
import ImgPefil1 from "../assets/image/imgMulherPerfil1.jpg"
import ImgPefil2 from "../assets/image/imgMulherPerfil2.jpg"
import ImgPefil3 from "../assets/image/imgHomemPerfil.jpg"

function Comentarios() {
  return (
    <div className="Comentarios">
        <h1>Nossos clientes falam por nós.</h1>
        <p>Confira as experiências de quem já agendou com a gente e veja por que nosso serviço é destaque quando o assunto é praticidade e qualidade.</p>
        <div>
            <ComentariosCard img={ImgPefil1} Nome="Mariana Lopes" titulo="Agendamento super rápido!" coment="Fiquei surpresa com a facilidade! Em menos de 2 minutos eu já tinha marcado meu horário. Tudo muito intuitivo e eficiente. Recomendo demais!"/>
            <ComentariosCard img={ImgPefil2} Nome="Juliana Costa" titulo="Experiência 10/10" coment="Gostei muito do processo todo! Visual moderno, simples de usar e com confirmação imediata. Já virei cliente fiel."/>
            <ComentariosCard img={ImgPefil3} Nome="Rafael Tavares" titulo="Qualidade e pontualidade" coment="O carro ficou impecável e o atendimento foi no horário certinho. A plataforma de agendamento funciona muito bem, sem enrolação."/>
        </div>
    </div>
  )
}

export default Comentarios
