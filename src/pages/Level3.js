import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import VignereTable from '../components/VignereTable'
import Next from '../components/Next'
import Img from 'react-image'


class Level3 extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "poopityscoop", dText: "poopityscoop", tText: "scoopdiddywhoop"}
        this.changeText = this.changeText.bind(this)
    }

    changeText(key){
        let keyArr = key.toUpperCase().split('')
        debugger;
        let extKeyArr = this.state.dText.split('').map((obj,i) => {
            return keyArr[i%keyArr.length]
        })
        const alphArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let test = this.state.cText.split('')
        let newText = this.state.dText.toUpperCase().split('').map((obj, i) => {
            return alphArr[(alphArr.indexOf(obj)+alphArr.indexOf(extKeyArr[i]))%26]
        }).join('')
        this.setState({dText: newText})
    }

    render() {
        return (
            <div style={{width:'100%'}}>
                <div className="background">
                    <Img src={'./background.jpg'} />
                </div>
                <Wiseman textArr={["This is one of my many magic artifacts. By rotating the outer wheel, you can encrypt any message. Try it yourself!"]}/>
                <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText}/>
                <VignereTable onChange={this.changeText}/> 
                <Next passed={true} nextLevel={"/level3tutorial"}/>
            </div>
        )
    }
}

export default Level3;