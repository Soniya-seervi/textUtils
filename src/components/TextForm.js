import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked on " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () =>{
        // console.log("uppercase was clicked on " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () => {
        let newText = "";
        setText(newText)
    }

    const handleReverse = () => {
        let stringArray = text.split("")
        stringArray = stringArray.reverse()
        let newText = stringArray.join("")
        setText(newText)
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }
    // State
    const [text, setText] = useState('');

    // text = "newText" => Wrong way to change the state
    // setText("newText") => Correct way to change the state
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="container mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-info mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-success mx-2" onClick={handleReverse}>Reverse Text</button>

    </div>

    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
