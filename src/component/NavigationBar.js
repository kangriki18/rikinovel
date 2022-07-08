import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = (promps) => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                <Navbar.Brand className="text-white">Riki Novels</Navbar.Brand>
                <Nav>
                 <Nav.Link href="#Terlaris">Terlaris</Nav.Link>
                 <Nav.Link href="#Terlaris">Semua Novel</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}



export default NavigationBar