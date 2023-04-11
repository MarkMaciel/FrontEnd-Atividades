import React from "react";
import Pagina from "../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

const objeto = () => {
  const carros = [
    {
      id: 1,
      marca: "Lamborguini",
      modelo: "Aventador",
      ano: 2021,
      foto: "https://cdn.motor1.com/images/mgl/4JyZA/s1/lamborghini-aventador-lp-780-4-ultimae.webp",
    },
    {
      id: 2,
      marca: "Henessey",
      modelo: "Venom GT",
      ano: 2018,
      foto: "https://images3.alphacoders.com/886/886108.jpg",
    },
    {
      id: 3,
      marca: "Pagani",
      modelo: "Huayra",
      ano: 2020,
      foto: "https://i.pinimg.com/originals/05/f5/4c/05f54c5d651eb4fc8fd75126cf8fc8b9.jpg",
    },
    {
      id: 4,
      marca: "Ford Shelby",
      modelo: "Mustang GT500",
      ano: 2020,
      foto: "https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/ford-mustang-shelby-gt500se-shelby-america-signature-edition.jpg?quality=70&strip=info",
    },
    {
      id: 5,
      marca: "McLaren",
      modelo: "720s",
      ano: 2020,
      foto: "https://www.planetcarsz.com/assets/uploads/2019/08/06f02533a3262e4e11721aafd366955e.jpg",
    },
    {
      id: 6,
      marca: "Koenisegg",
      modelo: "Jesko",
      ano: 2021,
      foto: "https://images7.alphacoders.com/102/thumb-1920-1026435.jpg",
    },
    {
      id: 7,
      marca: "Bugatti",
      modelo: "Chiron",
      ano: 2019,
      foto: "https://cdn.motor1.com/images/mgl/pbxogg/s1/post-malone-s-2019-bugatti-chiron.jpg",
    },
    {
      id: 8,
      marca: "Ferrari",
      modelo: "458 Spider Convertible",
      ano: 2021,
      foto: "https://cdn.buttercms.com/64SPZu6SdCFpDAdCMdqY",
    },
  ];
  return (
    <Pagina titulo="Carros">
      <Row className="mb-5 mt-5">
        {carros.map((carro) => (
          <Col md={3} className="mb-4">
            <Card className="border-dark">
              <Card.Img variant="top" src={carro.foto} />
              <Card.Body>
                <Card.Title>{carro.modelo}</Card.Title>
                <Card.Text>
                  Fabricante: <strong>{carro.marca}</strong>
                </Card.Text>
                <Card.Text>
                  Ano: <strong>{carro.ano}</strong>
                </Card.Text>
                <Button className="bg-danger border-danger">Ver mais</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default objeto;
