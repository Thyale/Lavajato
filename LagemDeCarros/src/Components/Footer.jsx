import Logo from "../assets/Logo/Logo.png"

function Footer() {
  return (
    <div className="Footer">
        <div className="FooterConteudo">
            <img src={Logo} alt="Logo do Lavajato" />
            <div className="FooterConteudoContainer">

                <div>
                    <h1>Sessões</h1>
                    <ul>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Valores</a></li>
                        <li><a href="#">Relatos</a></li>
                        <li><a href="#">Agendamento</a></li>
                    </ul>
                </div>

                <div>
                    <h1>Novidades</h1>
                    <p>Acompanhe a gente no Instagram para não perder promoções, novidades e bastidores dos nossos serviços.</p>
                    <a href="#">Instagram</a>
                </div>

                <div>
                    <h1>Agendamento</h1>
                    <p>Clique no botão abaixo e marque seu horário em poucos passos. Rápido, fácil e do seu jeito.</p>
                    <a href="#">WhatsApp</a>
                </div>
            </div>
        </div>
        <p>© 2025 Thyale MD. Todos os direitos reservados. || Design e desenvolvimento por Thyale MD.</p>
    </div>
  )
}

export default Footer
