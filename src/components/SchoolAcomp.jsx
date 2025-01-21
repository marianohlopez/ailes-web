import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import birds from "../assets/Pajaros_azules.png"

const SchoolAcomp = () => {
  return (
    <Container id="schoolAcomp"
      style={{
      marginTop: "100px", 
      minHeight: "500px"
    }}>
      <Row>
        <Col>
          <h2 style={{
                color: "#273480",
                fontWeight: "bold", 
                fontSize: "40px"}}
                className="mb-4"
                >Acompañamiento escolar
          </h2>
          <p
            style={{
              color: "#273480", 
              fontSize: "20px"}} 
          >
            Trabajamos para que todos los niños puedan tener acceso a la escolaridad. Todos los niños 
            tienen las mismas oportunidades de aprendizaje con los apoyos que necesiten.
          </p>
          <img 
            style={{ 
              marginTop: "169px"}} 
            className="img-fluid" src={birds} alt="Pajaros azules"/>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <img style={{maxWidth:"397px"}} 
            className="img-fluid" src="./ao.png" alt="Maestra enseñando"/>
        </Col>
      </Row>
    </Container>
  )
}

export default SchoolAcomp
