import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'react-image'

class Home extends React.Component {
    render() {
        return (
            <div style={{ width: '100%' }} className="background" >

                <Container >

                    <Row sm className="pt-5">
                        <Col><h1 >Cryptic </h1></Col>
                    </Row>
                    <Row sm>
                        <Col><h6 >The Art Of Secrecy</h6></Col>
                    </Row>
                    <Row sm>
                        <Col></Col>
                        <Col md-auto><Link to="/intro" ><Button className="px-5">Intro</Button></Link></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;
