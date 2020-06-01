import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

class AdvancedFreqCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { letterArr: '' }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var array = this.props.text.split('')
        var joined = ""
        for (var i = 0; i < 5; i++) {
            if (array.length === 0) break;
            let maxEl = this.maxOccurence(array)
            joined += maxEl;
            array = this.removeChar(array, maxEl)
        }
        this.setState({ letterArr: joined })

    }
    removeChar(charArray, char) {
        return charArray.filter((ch) => (char !== ch))
    }
    maxOccurence(charArray) {
        var modeMap = {};
        var maxEl = charArray[0], maxCount = 1;
        for (var j = 0; j < charArray.length; j++) {
            var el = charArray[j];
            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl
    }

    render() {
        return (
            <Container>
            <Row className="pt-1">
                <Col>
                The five most common letters are:
                </Col>
            </Row>
            <Row >
                <Col style={{ fontSize: '40px' }}>
                {this.state.letterArr.split(' ')} &nbsp;
                </Col>
            </Row>
            <Row>
                <Col>
                <Button onClick={this.handleClick} className="btn-primary"> Frequency Counter </Button>
                </Col>
            </Row>
            
            
        </Container>
         
        );
    }
}

export default AdvancedFreqCounter;