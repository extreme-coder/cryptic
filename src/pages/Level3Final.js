import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import VignereTable from '../components/VignereTable'
import Next from '../components/Next'
import Img from 'react-image'
import { Container, Col, Row } from 'react-bootstrap';

class Level3Final extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "JSGOEPXTSZLWFSENVKDGZKDOCSID", dText: "JSGOEPXTSZLWFSENVKDGZKDOCSID", tText: "YOUARETHEMASTERCRYPTOGRAPHER", passed: false}
        this.changeText = this.changeText.bind(this)
    }

    changeText(key){
        let keyArr = key.toUpperCase().split('')
        let extKeyArr = this.state.dText.split('').map((obj,i) => {
            return keyArr[i%keyArr.length]
        })
        const alphArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let test = this.state.cText.split('')
        let newText = this.state.cText.toUpperCase().split('').map((obj, i) => {
            return alphArr[(((alphArr.indexOf(obj)-alphArr.indexOf(extKeyArr[i]))+26)%26)]
        }).join('')
        this.setState({ dText: newText })
        if (newText === this.state.tText) {
            this.setState({ passed: true })
        }
    }

    render() {
        return (
            <Container fluid>
            <Row>
                <Col md={4}></Col>
                <Col>
                    <VignereTable onChange={this.changeText}/> 
                </Col>
                <Col md={4}></Col>
            </Row>
            <Row className="row-mt-auto">
                <Col md={3}>
                    <Wiseman textArr={["Now it's your turn to have a go at it! But unfortunately, I cannot give you any tools to help you. All you have is my hints, and your mind!","Speaking of which, don't be afraid to ask for hints! Now give it a try!","Hint 1: All that I know so far is that the key has five letters. Make with that what you will...","Hint 2: Isn't the Vignere cipher just applying a different Caesar shift for each letter? I might be onto something...","Hint 3: Try dividing the text into five groups, based on which letter of the key is used to encrypt them... it might serve you well!","Hint 4: Maybe you could run frequency analysis on those groups! That could just work!"]} />
                </Col>
                <Col>
                    <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                </Col>
                <Col  md={3}>
                    <div style={{ bottom: '0px' }}>
                        <Next passed={this.state.passed} nextLevel={"/final"}/>
                    </div>
                </Col>
            </Row>
        </Container>
        )
    }
}

export default Level3Final;