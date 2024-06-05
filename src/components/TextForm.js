import React, {useState} from 'react'

function TextForm(props) {
    const handleUpclick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowclick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toLowerCase(); 
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearclick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = ""; 
        setText(newText);
        props.showAlert("Cleared!", "success");
    }
    
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");

    }
    return (
        <>
        <div className = "container" style={{color: props.mode === 'dark' ? 'white' : 'black', backgroundColor : props.mode === 'dark' ? 'grey' : 'white'}}>
            <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearclick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}

export default TextForm
