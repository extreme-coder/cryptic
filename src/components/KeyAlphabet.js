import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';

class KeyAlphabet extends React.Component {
    constructor(props){
        super(props);
        this.state = {key: '', standardAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', keyAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
        this.setKey = this.setKey.bind(this);
    }

    setKey(){
        var newKey = prompt("Enter the new key",this.state.key);
        if(newKey==null)
            newKey=''
        newKey = newKey.toUpperCase();
        var newAlph = newKey + this.state.standardAlph.split('').filter((letter) => {
            var newKeyArr = newKey.split('');
            return !newKeyArr.includes(letter)
        }).join('');
        this.setState({key: newKey, keyAlph: newAlph});
        this.props.onChange(this.state.standardAlph,newAlph);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className={this.props.type}>
                        <div style={{position:"absolute", bottom:"140px", left:"180px"}}>
                            <div>{this.state.standardAlph}</div>
                            <div>{this.state.keyAlph}</div>
                            <div>&nbsp;</div>
                            <div style={{ fontSize: "20px", fontStyle: "bold" }}>Key:{this.state.key}</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={this.setKey}>Set Key</Button>
                    </Col>
                </Row>
            </Container>
            
        );
    }
}

export default KeyAlphabet;