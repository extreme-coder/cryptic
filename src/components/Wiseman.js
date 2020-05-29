import React from 'react';
import Img from 'react-image';
import { Button, Col, Row, Container } from 'react-bootstrap';



class Wiseman extends React.Component {
    constructor(props) {
        super(props);
        this.state = { textIndex: 0 }
        this.nextLine = this.nextLine.bind(this);
    }
    nextLine() {
        if (this.state.textIndex < this.props.textArr.length - 1) {
            this.setState({ textIndex: this.state.textIndex + 1 })
        }
    }
    render() {
        return (
            <>
                <Row>
                    <Col><Img src={'./wiseman.jpg'} /></Col>
                </Row>
                <Row>
                    <Col> {this.props.textArr[this.state.textIndex]}</Col>
                    <Col className="col-md-auto">
                        {
                        (this.state.textIndex < this.props.textArr.length-1) ? 
                            (<Button onClick={this.nextLine}>
                                Next
                            </Button>):''
                        }
                    </Col>
                </Row>
            </>

        );
    }
}

export default Wiseman;
