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
        ctx.clearRect(0, 0, 800, 600);

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

        ctx.fillText(`${leadZero(h)} : ${leadZero(date.getMinutes())} : ${leadZero(date.getSeconds())}  ${apm}`, 400, 250);

        ctx.font = "2.4em Arial";
        ctx.strokeStyle = "aliceblue";
        ctx.strokeText(`${months[date.getMonth()]} ${date.getDate()} - ${days[date.getDay()]}`, 400, 350);

        document.title = `${leadZero(date.getMinutes())}:${leadZero(date.getSeconds())}`;

        requestAnimationFrame(this.tick);
    }

    render() {
        return(
            <canvas width={ 800 } height={ 600 } ref={ this.cvsRef }/>
        );
    }
}

export default Clock;