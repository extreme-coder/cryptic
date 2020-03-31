import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello </h1>
                <Link to="/intro" ><Button >Intro</Button></Link>
                
            </div>
            
        );
    }
}
  
export default Home;