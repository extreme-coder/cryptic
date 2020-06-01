import React from 'react';
import Img from 'react-image'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

class VignereTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = { key: "" }
        this.setKey = this.setKey.bind(this);
    }

    setKey(){
        var newKey = prompt("Enter the new key",this.state.key);
        if(newKey==null)
            newKey=''
        newKey = newKey.toUpperCase();
        this.setState({ key: newKey });
        this.props.onChange(newKey);
    }

    render() {
        let rowArr = []
        let letterArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
        letterArr.map((letter, i) => {
            let columnArr = letterArr.map((letter, j) => {
                let newJ = i + j
                if (newJ < 26) {
                    return (
                        <Col className="vign">
                            {letterArr[newJ]}
                        </Col>
                    )
                } else {
                    return (
                        <Col className="vign">
                            {letterArr[newJ - 26]}
                        </Col>
                    )
                }
            })
            rowArr.push(
                <Row>
                    {columnArr}
                </Row>
            )
            return true
        })
        return (
            <div>
                <div onClick={this.setKey}><p style={{color: 'black'}}>{rowArr}</p></div>
            </div>
        )
    }
}

export default VignereTable;