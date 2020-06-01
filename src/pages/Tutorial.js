import React from 'react';
import Img from 'react-image'
import Next from '../components/Next'
import { Container, Col, Row } from 'react-bootstrap';

class Tutorial extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="pt-5">
                      <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                      <p></p>
                    </Col>
                    <Col className="tutorial">
                        <Row>
                            <Col md={2}></Col>
                            <Col>{this.props.text}</Col>
                            <Col md={2}></Col>
                        </Row>
                        <Row>
                            <Col className="pt-5">
                             <Next passed={true} nextLevel={this.props.nextLevel}/>
                            </Col>
                        </Row>    
                    </Col>
                    <Col md={3}>
                    
                    </Col>
                </Row>
            </Container>    
            
        );
    }
}

export default Tutorial;