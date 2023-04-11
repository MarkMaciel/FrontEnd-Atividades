import React from "react";
import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

const objeto = () => {

  const carros = [

    {marca: 'Chevrolet', modelo: 'Celta', ano: '2010', cor: 'vermelho', foto:'https://cdn.grupolance.com.br/batches/8f/19257/72cff3911efd5e4120d2c065122fc47d.jpg'},
    {marca: 'Fiat', modelo: 'Uno', ano: '2010', cor: 'preto', foto:'https://carros-birigui.temusados.com.br/cache/img/400/300/12/31/400_300_fiat-uno-preto-2010-20161201581.jpg'},
    {marca: 'Fiat', modelo: 'Argo', ano: '2022', cor: 'branco', foto:'https://cdn.motor1.com/images/mgl/eE4zA/s3/fiat-argo-drive-1.0-s-design-2022.jpg'},
    {marca: 'Honda', modelo: 'Civic', ano: '2020', cor: 'prata', foto: 'https://espacodoautomovelcaxias.com.br/carros/b8ef7fbab517c68d7283415c94f4699b-thumbjpeg-honda-civic-8876807-1200-900-70.jpg'},
    {marca: 'Ford', modelo: 'Focus', ano: '2015', cor: 'azul', foto: 'https://s2.glbimg.com/UnecLLX9ZWASCrY3SR0ksdUxeaY=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/A/6/ZROgqdSNm2QJeFg5JvKw/2015-06-22-autoesporte-focus-07-1.jpg'},

  ];

  const carro = {marca: 'Chevrolet', modelo: 'Celta', ano: '2010', cor: 'vermelho'};

  return (
    <Pagina titulo="Objetos">
      <Container>

        { carros.map(item => (
          
          <div> 
            <h1>{item.marcca} - {item.modelo}</h1>
            <p>Ano: {item.ano}</p>
            <p>Cor: {item.cor}</p>
            <img style={{width: '100px'}} src={item.foto}/>

          </div>

        ))}

      </Container>
    </Pagina>
  );
};

export default objeto;
