import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import KeyAlphabet from '../components/KeyAlphabet'
import Next from '../components/Next'
import Img from 'react-image'
import { Knob } from 'react-rotary-knob'
import * as skins from "react-rotary-knob-skin-pack"
import * as actions from './actions/level2';
import { connect } from 'react-redux';

class Level2 extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "poopityscoop", dText: "poopityscoop", tText: "scoopdiddywhoop"}
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <div className="background">
                    <Img src={'./background.jpg'} />
                </div>
                <Wiseman textArr={["This is one of my many magic artifacts. By rotating the outer wheel, you can encrypt any message. Try it yourself!"]}/>
                <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText}/>
                <KeyAlphabet/>
                <Next passed={true} nextLevel={"/level1tutorial"}/>
            </div>
        )
    }
}

export default Level2;