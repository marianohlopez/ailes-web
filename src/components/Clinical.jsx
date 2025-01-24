import Music from "../assets/E_con_musica.png"
import Rectangles from "../assets/Rectangulos.png"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Clinical = () => {
  return (
    <Container id="clinical"
      style={{
      marginTop: "50px", 
      minHeight: "500px",
      color: "#273480",
    }}>
      <Row>
        <Col md={7}>
          <h2 style={{
                fontWeight: "bold", 
                fontSize: "40px"}}
                className="mb-4"
                >Área clínica
          </h2>
          <p
            style={{ fontSize: "20px" }} 
          >
            Nuestro equipo, especializado en discapacidad y en problemáticas específicas que 
            atraviesan niñas, niños y adolescentes, brinda un apoyo centrado en la singularidad 
            de cada paciente, promoviendo su bienestar y desarrollo en todos los aspectos de su vida.
          </p>
          <img 
            style={{ marginTop: "100px", maxWidth:"256px" }} 
            className="img-fluid ms-auto d-block" src={Music} alt="Letra E con música"/>
        </Col>
        <Col md={5} className="d-flex justify-content-center align-items-center">
          <img style={{maxWidth:"235px"}} 
            className="img-fluid" src={Rectangles} alt="Especialidades"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Clinical
