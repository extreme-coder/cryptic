import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
class FreqCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {letter: ''}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var array = this.props.text.split('')
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        this.setState({letter: maxEl})
    }

    render() {
        return (
            <Container>
                <Row className="pt-1">
                    <Col>
                    The most common letter is 
                    </Col>
                </Row>
                <Row >
                    <Col style={{ fontSize: '60px' }}>
                      {this.state.letter} &nbsp;
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

export default FreqCounter;