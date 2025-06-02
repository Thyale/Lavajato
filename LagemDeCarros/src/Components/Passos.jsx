import ImgSeta from "../assets/image/ImgArrow.png"

function Passos() {
  return (
    <div className="Passos">
        <h1>Agende em minutos,<strong><br></br> sem complicações</strong></h1>
        <div className="PassosContainer">
            <div>
                <h2>Escolha o serviço</h2>
                <p>Selecione o tipo de lavagem que você deseja — do básico ao completo.</p>
            </div>
            <img src={ImgSeta} alt="ícone de seta" />
            <div>
                <h2>Defina o melhor horário</h2>
                <p>Veja os horários disponíveis e escolha o que funciona melhor pra você.</p>
            </div>
            <img src={ImgSeta} alt="ícone de seta" />
            <div>
                <h2>Confirme e pronto!</h2>
                <p>Revise suas informações e finalize o agendamento. Você receberá a confirmação por e-mail ou WhatsApp.</p>
            </div>
        </div>
    </div>
  )
}

export default Passos
