import React from 'react';
import Wiseman from '../components/Wiseman'
import Next from '../components/Next'
import Img from 'react-image'
import { Container, Col, Row } from 'react-bootstrap';


class Intro extends React.Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
                <Container fluid>
                    <Row>
                        <Col >
                            <p></p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '0' }}>
                        <Col>
                            <Wiseman textArr={["Hello there apprentice, I see you wish to learn the ways of cryptography. I shall be your guide. But be wary, for this is no easy art.", "Cryptography is what I like to call the science of secrecy. It is na method of manipulating text, so that your allies can understand it, but your enemies can't.", "With that out of the way, where shall we start? Oh, I know! Let me introduce you to the Caesar Wheel."]} />
                        </Col>
                        <Col>
                            <div className="nextLevel">
                                <Next passed={true} nextLevel={"/level1"} />
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}

export default Intro;