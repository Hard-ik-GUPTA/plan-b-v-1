import React from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Timerstyles.css";

const renderTime = ({ remainingTime }) => {
    

    return (
        <div className="timer">
            <div className="value">{Math.floor(remainingTime / 60) + "m" + remainingTime % 60 + "s"}</div>
        </div>
    );
};

function TimerComponent() {
    return (
        <div className="App">

            <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying
                    duration={5400}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[10, 6, 3, 0]}
                    size={30}
                    strokeWidth={4}
                    >
                    {renderTime}
                </CountdownCircleTimer>
            </div>

        </div>
    );
}


export default TimerComponent;