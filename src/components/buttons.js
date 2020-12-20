
import React from "react";


function Buttons(props) {
    return (
        <button>
            <div className="vstack border-1 border-black align-end button-style w-448 h-48 rounded-5 px-8" style={{backgroundColor: "var(--background)"}}>
                <div className="text-color text-24 weight-900">
                        <div style={{color: "var(--text-color)", boxShadow: "5px 10px #888888;"}}>{props.buttonText}</div>
                </div>
            </div>
        </button>
	)
}

export default Buttons;