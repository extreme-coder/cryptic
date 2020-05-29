import React from 'react';
import Img from 'react-image'
import { Row, Col } from 'react-bootstrap';

class Scroll extends React.Component {

    render() {
        return (
            <div>
                <Row className="row-mt-auto scroll" >
                    <Col sm>
                    </Col>
                    <Col className="pt-5">
                        <p>{this.props.displayText}</p>
                    </Col>
                    <Col sm>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Scroll;