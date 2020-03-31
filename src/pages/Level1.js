import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'

import Next from '../components/Next'
import Img from 'react-image'
import { Knob } from 'react-rotary-knob'
import * as skins from "react-rotary-knob-skin-pack"

class Level1 extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "poopityscoop", dText: "poopityscoop", tText: "scoopdiddywhoop"}
    }

    changeValue(val) {
        var newText = [];
        for (var i=0; i<this.state.cText.length; i++) {
            
            let char = this.state.cText.charCodeAt(i) - 97
            let shift =  parseInt(val/(100/26))
            let shiftedChar = (char + shift ) % 26     
            newText.push(String.fromCharCode(shiftedChar + 97));
        }
        console.log(newText.join(''));
        this.setState({dText: newText.join('')});
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <div className="background">
                    <Img src={'./background.jpg'} />
                </div>
                <Wiseman textArr={["This is one of my many magic artifacts. By rotating the outer wheel, you can encrypt any message. Try it yourself!"]}/>
                <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText}/>
                <div className="caesarWheel">
                    <Knob style={{width:'500px', height:'500px'}} skin={skins.s15} defaultValue={0} onChange={this.changeValue.bind(this)}/>
                </div>
                
                <Next passed={true} nextLevel={"/level1tutorial"}/>
            </div>
        )
    }
}

export default Level1;