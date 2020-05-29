import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'

import Next from '../components/Next'
import Img from 'react-image'
import { Knob } from 'react-rotary-knob'
import * as skins from "react-rotary-knob-skin-pack"
import { Container, Col, Row } from 'react-bootstrap';
import wheel from '../components/swheel.js'

class Level1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cText: "poopityscoop", dText: "poopityscoop", tText: "scoopdiddywhoop" }
    }

    changeValue(val) {
        var newText = [];
        for (var i = 0; i < this.state.cText.length; i++) {

            let char = this.state.cText.charCodeAt(i) - 97
            let shift = parseInt(val / (100 / 26))
            let shiftedChar = (char + shift) % 26
            newText.push(String.fromCharCode(shiftedChar + 97));
        }
        console.log(newText.join(''));
        this.setState({ dText: newText.join('') });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Knob style={{ width: '500px', height: '500px', left: '50%', transform: 'translate(-50%)' }} skin={wheel} defaultValue={0} onChange={this.changeValue.bind(this)} />
                    </Col>
                </Row>
                <Row className="row-mt-auto">
                    <Col md={3}>
                        <Wiseman textArr={["This is one of my many magic artifacts. By rotating the outer wheel, you can encrypt any message. Try it yourself!"]} />
                    </Col>
                    <Col>
                        <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                    </Col>
                    <Col className="col-md-auto">
                        <div style={{ bottom: '0px' }}>
                            <Next passed={true} nextLevel={"/level1tutorial"} />
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Level1;