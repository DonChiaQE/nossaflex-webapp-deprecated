import "@zaydek/duomo";


function Buttons(props) {
    return (
        <div className="vstack border-1 border-black align-end button-style w-448 h-48 rounded-5 px-8" style={{backgroundColor: "var(--background)"}}>
            <div className="text-color text-24 bold">
                <mark style={{backgroundColor: props.highlightColor}}>
                    <div style={{color: "var(--text-color)"}}>{props.buttonText}</div>
                </mark>
            </div>
        </div>
	)
}

export default Buttons;