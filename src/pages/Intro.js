import React from 'react';
import Wiseman from '../components/Wiseman'
import Next from '../components/Next'
import Img from 'react-image'
import Scroll from '../components/Scroll'
import { Container, Col, Row } from 'react-bootstrap';


class Intro extends React.Component {
    render() {
        return (


            <Container fluid>
                <Row>
                    <Col className="py-5">
                        <h1 style={{fontSize:"180px"}}>Cryptic</h1>
                    </Col>
                </Row>
                <Row classname="row-mt-auto">
                    <Col>
                        &nbsp;
                    </Col>
                </Row>
                <Row className="row-mt-auto">
                    <Col md={3}>
                    <Wiseman textArr={["Hello there apprentice, I see you wish to learn the ways of cryptography. I shall be your guide. But be wary, for this is no easy art.", "Cryptography is what I like to call the science of secrecy. It is na method of manipulating text, so that your allies can understand it, but your enemies can't.", "I am the Cryptography Master, and you have just become my apprentice.","I see great potential in you, but only after you complete the three challenges, can you become the next Cryptography Master.","With that out of the way, let us begin the first challenge! Click on the continue button to move forward."]} />
                    </Col>
                    <Col>
                        <Scroll cipherText={""} displayText={"The Art Of Secrecy"} targetText={""} />
                    </Col>
                    <Col  md={3}>
                        <div style={{ bottom: '0px' }}>
                            <Next passed={true} nextLevel={"/level1"} />
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Intro;