import React from 'react';
import Img from 'react-image'

class Scroll extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="scroll">
                <div><p>{this.props.displayText}</p></div>
                <div><Img src={'./scroll.png'} /></div>
                
            </div>
        );
    }
}

export default Scroll;