import React from 'react';
import Img from 'react-image';
import Button from 'react-bootstrap/Button';


class Wiseman extends React.Component {
    constructor(props){
        super(props);
        this.state = { textIndex: 0}
        this.nextLine = this.nextLine.bind(this);
    }
    nextLine() {
        if(this.state.textIndex < this.props.textArr.length-1){
            this.setState({textIndex: this.state.textIndex+1})
        }
    }
    render() {
        return (
            <div className="wiseman">
                <div className="wiseimage" >
                    <Img src={'./wiseman.png'} />
                </div>
                <div className="wisewords">
                    {this.props.textArr[this.state.textIndex]}
                </div>
                <div className="NextButton">
                    <Button onClick={this.nextLine}>
                        Next
                    </Button>
                </div>
            </div>
            
        );
    }
}

export default Wiseman;
