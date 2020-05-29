import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import FreqCounter from '../components/FreqCounter'
import Next from '../components/Next'
import Img from 'react-image'
import { Knob } from 'react-rotary-knob'
import * as skins from "react-rotary-knob-skin-pack"
import { Container, Col, Row } from 'react-bootstrap';

class Level1Final extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cText: "krkvngtzykdgsotkktjksoikmmvrgtz", dText: "krkvngtzykdgsotkktjksoikmmvrgtz", tText: "elephantsexamineendemiceggplant", passed: false }
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
        if (this.state.dText == this.state.tText) {
            this.setState({ passed: true })
        }
    }

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col>
                        <Knob style={{ width: '500px', height: '500px', left: '50%', transform: 'translate(-50%)' }} skin={skins.s15} defaultValue={0} onChange={this.changeValue.bind(this)} />
                    </Col>
                </Row>
                <Row className="row-mt-auto">
                    <Col md={2}>
                        <Wiseman textArr={["This is one of my many magic artifacts. By rotating the outer wheel, you can encrypt any message. Try it yourself!"]} />
                    </Col>
                    <Col>
                        <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                    </Col>
                    <Col className="col-md-auto">
                        <Next passed={this.state.passed} nextLevel={"/level2"} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Level1Final;