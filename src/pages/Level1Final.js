import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import FreqCounter from '../components/FreqCounter'
import Next from '../components/Next'
import Img from 'react-image'
import { Knob } from 'react-rotary-knob'
import * as skins from "react-rotary-knob-skin-pack"

class Level1Final extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "krkvngtzykdgsotkktjksoikmmvrgtz", dText: "krkvngtzykdgsotkktjksoikmmvrgtz", tText: "elephantsexamineendemiceggplant", passed: false}
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
        if (this.state.dText ==    this.state.tText){
            this.setState({passed: true})
        }
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <div className="background">
                    <Img src={'./background.jpg'} />
                </div>
                <Wiseman textArr={["c", "d"]}/>
                <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText}/>
                <div className="caesarWheel">
                    <Knob style={{width:'500px', height:'500px'}} skin={skins.s15} defaultValue={0} onChange={this.changeValue.bind(this)}/>
                </div>
                <FreqCounter text={this.state.cText}/>
                <Next passed={this.state.passed} nextLevel={"/level1tutorial"}/>
            </div>
        )
    }
}

export default Level1Final;