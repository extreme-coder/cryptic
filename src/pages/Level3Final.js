import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import VignereTable from '../components/VignereTable'
import Next from '../components/Next'
import Img from 'react-image'


class Level3Final extends React.Component {
    constructor(props){
        super(props);
        this.state={cText: "poopityscoop", dText: "poopityscoop", tText: "scoopdiddywhoop"}
        this.changeText = this.changeText.bind(this)
    }

    changeText(standardAlph, keyAlph){
        var alphArr = keyAlph.split('')
        var cTextArr = this.state.cText.toUpperCase().split('')
        var newText = cTextArr.map((letter)=>{
            console.log(standardAlph.split('').indexOf(letter))
            return alphArr[standardAlph.split('').indexOf(letter)]
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
                <VignereTable/> 
                <Next passed={true} nextLevel={"/level3tutorial"}/>
            </div>
        )
    }
}

export default Level3Final;