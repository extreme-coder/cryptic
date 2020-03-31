import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Next extends React.Component {
    constructor(props){
        super(props);
    }

    incorrect(){
        alert('Incorrect message. Try again!')
    }

    render() {
        return (
            <div className="nextLevel">
                {(() => {
                    if (this.props.passed) {
                        return <Link to= {this.props.nextLevel} ><Button >Continue</Button></Link>;
                    } else {
                        return <Button onClick={this.incorrect}>Continue</Button>
                    }
                })()}
            </div>
          );
    }
}

export default Next;