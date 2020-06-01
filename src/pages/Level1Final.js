import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import FreqCounter from '../components/FreqCounter'
import Next from '../components/Next'
import Img from 'react-image'
import { Knob } from 'react-rotary-knob'
import * as skins from "react-rotary-knob-skin-pack"
import { Container, Col, Row } from 'react-bootstrap';
import wheel from '../components/swheel.js'

class Level1Final extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cText: "krkvngtzkdgsotkktjksoikmmvrgtz", dText: "krkvngtzykdgsotkktjksoikmmvrgtz", tText: "elephantexamineendemiceggplant", passed: false }
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
                         <Knob style={{ width: '500px', height: '500px', left: '50%', transform: 'translate(-50%)' }} skin={wheel} defaultValue={0} onChange={this.changeValue.bind(this)} />
                    </Col>
                </Row>
                <Row className="row-mt-auto">
                    <Col md={2}>
                        <Wiseman textArr={["Now it's your turn! This time, you're going to try decrypting a message that we intercepted, but you don't know the key! ",
                            "To help you out, use the Frequency Counter on the corner of your screen; if you click on it, it will tell you the most common letter! Good luck, and ask me if you need any hints!",
                            "Hint 1: What's the most common letter of the ciphertext? And what's the most common letter in English? Those two might be related!"]} />
                    </Col>
                    <Col>
                        <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                    </Col>
                    <Col md={2}>
                        <Row>
                            <Col><Next passed={this.state.passed} nextLevel={"/level2"} /></Col>
                        </Row>
                        <Row className="pt-5">
                            <Col>&nbsp;</Col>
                        </Row>
                        <Row>
                            <Col><FreqCounter text={this.state.cText} /></Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Level1Final;