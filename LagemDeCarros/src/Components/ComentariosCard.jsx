function ComentariosCard({img,Nome,titulo,coment}) {
  return (
    <div className="ComentariosCard">
        <div>
          <img src={img} alt="Imagem de foto de perfil do comentário" />
          <p>{Nome}</p>
        </div>
        <h2>{titulo}</h2>
        <p>{coment}</p>
    </div>
  )
}

export default ComentariosCard
