import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Text converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Text converted to Lowercase", "success");
    }
    const handleExtraSpace = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success");
    }
    const handleOnChange = (event) => {
        console.log(event.target.value);
        setText(event.target.value)
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary m-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summery</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter something in the Text box to preview it here'}</p>
            </div>
        </>
    )
}
