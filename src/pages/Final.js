import React from 'react';
import Wiseman from '../components/Wiseman'
import Next from '../components/Next'
import Img from 'react-image'
import Scroll from '../components/Scroll'
import { Container, Col, Row } from 'react-bootstrap';


class Final extends React.Component {
    render() {
        return (
           
            <Container>
                <Row className="py-5">
                    <Col md={4}>
                    </Col>
                
                    <Col> <Wiseman textArr={["You did it! You solved the Chiffre Indecipherable!",
                "And would you look at that, the hidden message is nothing but a declaration of your awe-inspiring mastery!",
                "My friend, you truly are the Master Cryptographer. But your journey isn't over just yet!"]} /></Col>
                
                    <Col md={4}></Col>
                </Row>
                <Row>
                    <Col>
                        <Scroll  displayText="YOUARETHEMASTERCRYPTOGRAPHER"  />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Final;