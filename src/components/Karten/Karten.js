import React from 'react';
import data from '../../data.json';
import { Card,Container,Row,Col  } from "react-bootstrap";

//Das ist Kerte-Komponente
//Map-Verbindung ist noch nicht fertig

const Karten = () => {
    return (
        <Container>
            <Row>
            {data.map((item,index)=>{
                  return <Col xl={5} lg={5} md={3} >
              <Card style={{ width: '18rem' }} className="m-2">
                <Card.Img variant="top" src="https://i.pinimg.com/736x/f6/20/85/f6208524d30a0af0a85b60236e59aff3.jpg" />
                <Card.Body>
                <Card.Title> Tankstelle </Card.Title>
                  <Card.Text>
                    {item.Strasse}
                  </Card.Text>
                  <Card.Text>
                    {item.PLZ} {item.Ort}
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
             })}
           
            </Row>
        </Container>
    );
};

export default Karten;