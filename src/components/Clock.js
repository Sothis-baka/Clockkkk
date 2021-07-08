import React from 'react';
import helper from "../util/helper";

class Clock extends React.Component{
    constructor(props) {
        super(props);

        this.cvsRef = React.createRef();
    }

    componentDidMount() {
        requestAnimationFrame(this.tick);
        this.updateTitle();
        this.titleInterval = setInterval(this.updateTitle, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
    }

    updateTitle =  () => {
        const leadZero = helper.functions.leadZero;

        const time = new Date();
        document.title = `${leadZero(time.getHours())}:${leadZero(time.getMinutes())}`
    }

    tick = () => {
        const leadZero = helper.functions.leadZero;
        const {months, days} = helper.constants;

        const ctx = this.cvsRef.current.getContext('2d');
        ctx.clearRect(0, 0, 800, 600);

        const date = new Date();
        ctx.textAlign = "center";

        ctx.font = "4.8em Syne Mono, monospace";
        this.props.night ? ctx.fillStyle = "#81ecec" : ctx.fillStyle = "#2e86de";

        let apm = "AM";
        let h = date.getHours();
        let newH;
        if(h > 12){
            newH = leadZero(h - 12);
            apm = "PM";
        }else{
            newH = leadZero(h);
        }
        const m = leadZero(date.getMinutes());
        const s = leadZero(date.getSeconds());

        ctx.fillText(`${newH}:${m}:${s} ${apm}`, 400, 250);

        ctx.font = "2.4em Montserrat, sans-serif";
        this.props.night ? ctx.strokeStyle = "#FFC312" : ctx.strokeStyle = "#ee5253";

        ctx.strokeText(`${months[date.getMonth()]} ${date.getDate()} - ${days[date.getDay()]}`, 400, 350);

        requestAnimationFrame(this.tick);
    }

    render() {
        return(
            <canvas width={ 800 } height={ 600 } ref={ this.cvsRef }/>
        );
    }
}

export default Clock;