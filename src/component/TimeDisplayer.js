import * as React from "react";
import DateHook from "../hooks/DateHook";
import "./TimeDisplayer.css";

function TimeDisplayer() {
    const date = DateHook();

    return (
        <div className="time-displayer">
            <div>{date}</div>
        </div>
    )
}


export default TimeDisplayer;
