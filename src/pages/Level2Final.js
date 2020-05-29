import React from 'react';
import Wiseman from '../components/Wiseman'
import Scroll from '../components/Scroll'
import KeyAlphabet from '../components/KeyAlphabet'
import AdvancedFreqCounter from '../components/AdvancedFreqCounter'
import Next from '../components/Next'
import Img from 'react-image'


class Level2Final extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cText: "poopityscoop", dText: "poopityscoop", tText: "TFFTCVYHKFFT", passed: false }
        this.changeText = this.changeText.bind(this)
    }

    changeText(standardAlph, keyAlph) {
        var alphArr = standardAlph.split('')
        var cTextArr = this.state.cText.toUpperCase().split('')
        var newText = cTextArr.map((letter) => {
            console.log(keyAlph.split('').indexOf(letter))
            return alphArr[keyAlph.split('').indexOf(letter)]
        }).join('')
        this.setState({ dText: newText })
        if (newText == this.state.tText) {
            this.setState({ passed: true })
        }
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div className="background">
                    <Img src={'./background.jpg'} />
                </div>
                <Wiseman textArr={["This is one of my many magic artifacts. By rotating the outer wheel, you can encrypt any message. Try it yourself!"]} />
                <Scroll cipherText={this.state.cText} displayText={this.state.dText} targetText={this.state.tText} />
                <KeyAlphabet onChange={this.changeText} />
                <AdvancedFreqCounter text={this.state.cText} />
                <Next passed={this.state.passed} nextLevel={"/level3"} />
            </div>
        )
    }
}

export default Level2Final;