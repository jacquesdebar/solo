import React from "react";
import { render } from "react-dom";
import "../css/hunch.css"
import PDF from "../hunch.pdf"

export default class Hunch extends React.Component {
    onResumeClick = () => {
        window.open(PDF);
    };

    render() {
        return (
            <div className="hunchContainer">
                <div onClick={this.onResumeClick} className="hunchBox">
                    Hunch
                </div>
            </div>
        );
    }
}
