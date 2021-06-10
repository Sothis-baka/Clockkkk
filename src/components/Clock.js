import React from 'react';
import helper from "../util/helper";

class Clock extends React.Component{
    constructor(props) {
        super(props);

        this.cvsRef = React.createRef();
    }

    componentDidMount() {
        requestAnimationFrame(this.tick);
    }

    tick = () => {
        const leadZero = helper.functions.leadZero;
        const {months, days} = helper.constants;

        const ctx = this.cvsRef.current.getContext('2d');
        ctx.clearRect(0, 0, 600, 600);

        const date = new Date();
        ctx.textAlign = "center";


        ctx.font = "3.6em Orbitron, monospace";
        ctx.fillStyle = "#a29bfe";
        let apm = "AM";
        let h = date.getHours();
        if(h > 12){
            h -= 12;
            apm = "PM";
        }

        ctx.fillText(`${leadZero(h)} : ${leadZero(date.getMinutes())} : ${leadZero(date.getSeconds())}  ${apm}`, 300, 250);

        ctx.font = "2.4em Arial";
        ctx.strokeStyle = "aliceblue";
        ctx.strokeText(`${months[date.getMonth()]} ${date.getDate()} - ${days[date.getDay()]}`, 300, 350);

        requestAnimationFrame(this.tick);
    }

    render() {
        return(
            <canvas width={ 600 } height={ 600 } ref={ this.cvsRef }/>
        );
    }
}

export default Clock;