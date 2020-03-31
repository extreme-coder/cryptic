import React from 'react';
import Img from 'react-image'
import Next from '../components/Next'

class Tutorial extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="background">
                    <Img src={'./background.jpg'} />
                </div>
                <div className="tutorial">
                    <Img src={'./tutorial.png'} />
                </div>
                <div className="tutorial">
                    {this.props.text}
                </div>
                <Next/>
            </div>
        );
    }
}

export default Tutorial;