import { Container } from "react-bootstrap"
import titulo from "../assets/Vision_titulo.png"
import cohete from "../assets/Cohete.png"

const Vision = () => {
  return (
    <Container style={{color: "#273480", marginTop: "50px"}}>
      <img className="img-fluid" src={titulo} alt="título con faro" />
      <p style={{fontSize: "20px"}}>
        En AILES creemos que cada niño, niña y adolescente tiene el potencial de alcanzar grandes 
        logros cuando se encuentra en un entorno inclusivo y colaborativo. Nuestro compromiso es 
        acompañarlos para que desarrollen sus habilidades y puedan participar activamente en su 
        comunidad escolar y social.
      </p>
      <h2 className="text-end me-3" style={{marginTop: "60px", fontSize: "48px", fontWeight: "bold"}}
        >Misión
      </h2>
      <p className="text-end" style={{fontSize: "20px"}}>
        Buscamos que AILES sea un espacio de contención y asesoramiento, abierto a los cambios 
        y a las transformaciones de los tiempos. Ser capaces de adaptarnos a las nuevas exigencias 
        para ofrecer un servicio de calidad a los niños, niñas, adolescentes y familia.
      </p>
      <img className="img-fluid float-end mt-3" src={cohete} alt="imagen de cohete" />
    </Container>
  )
}

export default Vision
