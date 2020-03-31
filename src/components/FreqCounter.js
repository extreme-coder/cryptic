import React from 'react';

class FreqCounter extends React.Component {
    constructor(props){
        super(props);
        this.state = {letter: ''}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var array = this.props.text.split('')
        if(array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for(var i = 0; i < array.length; i++)
        {
            var el = array[i];
            if(modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        this.setState({letter: maxEl})
    }

    render() {
        return (
            <div className="freqCounter" onClick={this.handleClick}>
                The most common letter is: {this.state.letter}
            </div>
        );
    }
}

export default FreqCounter;