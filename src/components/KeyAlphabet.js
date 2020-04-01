import React from 'react';
import Button from 'react-bootstrap/Button';

class KeyAlphabet extends React.Component {
    constructor(props){
        super(props);
        this.state = {key: '', standardAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', keyAlph: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
        this.setKey = this.setKey.bind(this);
    }

    setKey(){
        var newKey = prompt("Enter the new key",this.state.key);
        if(newKey==null)
            newKey=''
        newKey = newKey.toUpperCase();
        var newAlph = newKey + this.state.standardAlph.split('').filter((letter) => {
            var newKeyArr = newKey.split('');
            return !newKeyArr.includes(letter)
        }).join('');
        this.setState({key: newKey, keyAlph: newAlph});
        this.props.onChange(this.state.standardAlph,newAlph);
    }

    render() {
        return (
            <div className="keyAlphabet">
                <div style={{position:'relative', float: 'top'}}>{this.state.standardAlph}</div>
                <div style={{position:'relative', float: 'bottom'}}>{this.state.keyAlph}</div>
                <div style={{position:'relative', float: 'bottom', transform: 'translate(0%,10%)'}}>Key:{this.state.key}</div>
                <div style={{position:'relative', float: 'bottom', transform: 'translate(0%,20%)'}}><Button onClick={this.setKey}>Set Key</Button></div>
            </div>
        );
    }
}

export default KeyAlphabet;