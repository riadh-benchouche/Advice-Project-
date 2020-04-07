import React from "react";
import axios from 'axios';


import './App.css'

class App extends React.Component{
    state ={  advive : '' };
    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                this.setState({advice});
        })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){

        const { advice } =this.state;
        return(
            <div className={"app"}>
                <div className={"cart"}>
                    <h1 className={"heading"} >{advice}</h1>
                    <button className="glow-on-hover" onClick={this.fetchAdvice}>
                     <span className={"h"}>Advice !</span>
                </button>
                </div>

            </div>
        );
    }

}

export default App;