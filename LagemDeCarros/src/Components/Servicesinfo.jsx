function Servicesinfo({img,name,description}) {
    return (
      <div className="Servicesinfo">
        <img src={img}/>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    )
  }
  
  export default Servicesinfo
  