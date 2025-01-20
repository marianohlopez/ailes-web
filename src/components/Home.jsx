import Letras from "../assets/Letras.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <Container id="home">
      <Row className="align-items-center mt-5">
        <Col md={7} className="text-center">
          <h1 style={{
            color: "#273480",
            fontWeight: "lighter", 
            fontSize: "40px"}}
            >Centro de <span style={{fontWeight: "bold"}}>inclusión</span><br/> 
            y <span style={{fontWeight: "bold"}}>terapias</span></h1>
        </Col>
        <Col md={5} className="text-center">
          <img className="img-fluid" src={Letras} alt="Letras de Ailes"/>
        </Col>
      </Row>     
    </Container>     
  )
}

export default Home
