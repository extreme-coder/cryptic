import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import KeyAlphabet from '../components/KeyAlphabet'
import Next from '../components/Next'
import Img from 'react-image'
import { Container, Col, Row } from 'react-bootstrap';


class Level2 extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "ILOVEPLAYINGCRYPTIC", dText: "ILOVEPLAYINGCRYPTIC", tText: "scoopdiddywhoop"}
        this.changeText = this.changeText.bind(this)
    }

    changeText(standardAlph, keyAlph){
        var alphArr = keyAlph.split('')
        var cTextArr = this.state.cText.toUpperCase().split('')
        var newText = cTextArr.map((letter)=>{
            console.log(standardAlph.split('').indexOf(letter))
            return alphArr[standardAlph.split('').indexOf(letter)]
        }).join('')
        this.setState({dText: newText})
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4}></Col>
                    <Col>
                        <KeyAlphabet onChange={this.changeText} type="keyAlphabet" />
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row className="row-mt-auto">
                    <Col md={3}>
                        <Wiseman textArr={["Your first task is complete! But your next tasks will be harder...","In fact, I think you're ready for the Key Alphabet Cipher!","Try playing around with another one of my magic artifacts, the KEY-ALPH 2000!","Click on the button to change the key and see what happens, but don't pick a key with repeating letters!"]} />
                    </Col>
                    <Col>
                        <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                    </Col>
                    <Col  md={3}>
                        <div style={{ bottom: '0px' }}>
                            <Next passed={true} nextLevel={"/level2tutorial"}/>
                        </div>
                    </Col>
                </Row>
            </Container>

             
               
                
           
        )
    }
}

export default Level2;