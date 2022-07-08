import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-items-center">
            <Row>
              <Col>
              <div className="title">NOVEL DAN KOMIK DI INDONESIA</div>
              <div className="title text-center">GRATIS 100%</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">Welcome</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export  default Intro