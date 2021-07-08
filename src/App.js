import React from "react";

import './App.css';

import Clock from "./components/Clock";
import ToolBar from "./components/ToolBar";

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = ({ night: true });
    }

    dayNightSwitch = () => {
        this.setState({ night: !this.state.night });
    }

    render() {
        const night = this.state.night;

        return (
            <div className={ "App" + (night ? "" : " day") }>
                <ToolBar night={ night } dayNightSwitch = { this.dayNightSwitch }/>
                <Clock night={ night }/>
            </div>
        );
    }


}

export default App;
