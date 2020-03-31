import React from 'react';
import Wiseman from '../components/Wiseman'
import Next from '../components/Next'
import Img from 'react-image'



class Intro extends React.Component {
    render() {
        return (
            <div style={{width:'100%'}}>
                <div className="background">
                    <Img src={'./background.jpg'} />
                </div>
                <div className="App">
                    This is Intro Page
                </div>
                <Wiseman textArr={["Hello there apprentice, I see you wish to learn the ways of cryptography. I shall be your guide. But be wary, for this is no easy art.","Cryptography is what I like to call the science of secrecy. It is na method of manipulating text, so that your allies can understand it, but your enemies can't.","With that out of the way, where shall we start? Oh, I know! Let me introduce you to the Caesar Wheel."]}/>
                
                <div className="nextLevel">
                    <Next passed={true} nextLevel={"/level1"}/>
                </div>
            </div>
        )
    }
}

export default Intro;