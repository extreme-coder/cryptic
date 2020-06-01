import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import VignereTable from '../components/VignereTable'
import Next from '../components/Next'
import Img from 'react-image'
import { Container, Col, Row } from 'react-bootstrap';


class Level3 extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "THEFINALCHALLENGEAWAITSYOU", dText: "THEFINALCHALLENGEAWAITSYOU", tText: "scoopdiddywhoop"}
        this.changeText = this.changeText.bind(this)
    }

    changeText(key){
        let keyArr = key.toUpperCase().split('')
        debugger;
        let extKeyArr = this.state.dText.split('').map((obj,i) => {
            return keyArr[i%keyArr.length]
        })
        const alphArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let test = this.state.cText.split('')
        let newText = this.state.dText.toUpperCase().split('').map((obj, i) => {
            return alphArr[(alphArr.indexOf(obj)+alphArr.indexOf(extKeyArr[i]))%26]
        }).join('')
        this.setState({dText: newText})
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
                    <Wiseman textArr={["If you made it through that, then congratulations! You just completed 2/3rds of your apprenticeship.","However, this challenge will be the hardest one yet, for even I have not solved this cipher.","Allow me to introduce you to the Chiffre Indecipherable itself, the Vignere cipher, which uses the Vignere table over there on your screen.","I won't get into the specifics now, but try it out by clicking on the Vignere table and choosing a key!"]} />
                </Col>
                <Col>
                    <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                </Col>
                <Col  md={3}>
                    <div style={{ bottom: '0px' }}>
                        <Next passed={true} nextLevel={"/level3tutorial"}/>
                    </div>
                </Col>
            </Row>
        </Container>
           
        )
    }
}

export default Level3;