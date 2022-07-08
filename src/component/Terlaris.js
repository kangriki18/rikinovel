import { Card, Container, Row, Col, Image } from "react-bootstrap"
import novel6Image from "../asset/Image/komik/novel6.png"
import novel2Image from "../asset/Image/komik/novel2.jpg"
import novel3Image from "../asset/Image/komik/novel3.jpg"
import novel4Image from "../asset/Image/komik/novel4.jpg"

const Terlaris = () => {
    return (
        <div>
            <br />
            <Container>
                <h2 className="text-white">NOVEL TERLARIS</h2>
                <br />
                <Row>
                    <Col md={3}className="comicWrapper" id="Terlaris">
                    <Card className="comicImage">
                        <Image src={novel6Image} alt="novel6"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                            <Card.Title className="text-center">Ayat-ayat Cinta</Card.Title>
                            <Card.Text className="text-center">
                            additional content.
                            </Card.Text>
                            <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={3}className="comicWrapper">
                        <Card className="comicImage">
                        <Image src={novel2Image} alt="novel2"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">BUMI</Card.Title>
                                <Card.Text className="text-center">
                                additional content.
                                </Card.Text>
                                <Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={3}className="comicWrapper">
                        <Card className="comicImage">
                        <Image src={novel3Image} alt="novel3"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">LAYANGAN PUTUS</Card.Title>
                                <Card.Text className="text-center">
                                additional content.
                                </Card.Text>
                    <           Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col>
                    <Col md={3}className="comicWrapper">
                        <Card className="comicImage">
                        <Image src={novel4Image} alt="novel4"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">BUKAN BUKU NIKAH</Card.Title>
                                <Card.Text className="text-center">
                                additional content. 
                                </Card.Text>
                    <           Card.Text className="text-center">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                        </Card>
                    </Col> 
                </Row>
            </Container>
            
        </div>
    )
}

export default Terlaris;