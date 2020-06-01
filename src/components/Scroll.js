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
                    <Col  style={{fontSize:'40px', paddingTop:'50px'}}>
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