import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import KeyAlphabet from '../components/KeyAlphabet'
import AdvancedFreqCounter from '../components/AdvancedFreqCounter'
import Next from '../components/Next'
import Img from 'react-image'
import { Container, Col, Row } from 'react-bootstrap';


class Level2Final extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cText: "MLAQELCTMQUJATDAKRJJ", dText: "MLAQELCTMQUJATDAKRJJ", tText: "ONERINGTORULETHEMALL", passed: false }
        this.changeText = this.changeText.bind(this)
    }

    changeText(standardAlph, keyAlph) {
        var alphArr = standardAlph.split('')
        var cTextArr = this.state.cText.toUpperCase().split('')
        var newText = cTextArr.map((letter) => {
            console.log(keyAlph.split('').indexOf(letter))
            return alphArr[keyAlph.split('').indexOf(letter)]
        }).join('')
        this.setState({ dText: newText })
        if (newText == this.state.tText) {
            this.setState({ passed: true })
        }
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4}></Col>
                    <Col>
                        <KeyAlphabet onChange={this.changeText} type="reverseKeyAlphabet" />
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row className="row-mt-auto">
                    <Col md={3}>
                        <Wiseman textArr={["Now you have to try and decrypt this message which was sent using the key cipher.","The Reverse KEY-ALPH 2000 can decrypt a key cipher if you type in the key!","The advanced frequency counter can give you the five most common letters of the ciphertext!","And as always, I'm here to give you hints! Now try it out!","Hint 1: Once you figure out a lot of letters, the key might reveal itself.","Hint 2: If you try using frequency analysis, you can knock out five letters! But be careful, because they might not all match up perfectly!","Hint 3: If you have some letters already, notice what those letters generally show uo next two. There are lots of patterns in the English language!","Hint 4: The key might just be something important from a fantasy book trilogy!"]} />
                    </Col>
                    <Col>
                        <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                    </Col>
                    <Col md={3}>
                        <Row>
                            <Col><Next passed={this.state.passed} nextLevel={"/level3"} /></Col>
                        </Row>
                        <Row className="pt-5">
                            <Col>&nbsp;</Col>
                        </Row>
                        <Row>
                            <Col><AdvancedFreqCounter text={this.state.cText} /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            
          
        )
    }
}

export default Level2Final;