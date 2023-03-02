import React,{useState} from 'react'


export default function TextForm(props) {

    // State
    const [text, setText] = useState('');

    // text = "newText" => Wrong way to change the state
    // setText("newText") => Correct way to change the state

    const handleUpClick = () =>{
        // console.log("uppercase was clicked on " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper case!", "success")
    }

    const handleLoClick = () =>{
        // console.log("uppercase was clicked on " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case!", "success")
    }

    const handleClear = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleared!", "success")
    }

    const handleReverse = () => {
        let stringArray = text.split("")
        stringArray = stringArray.reverse()
        let newText = stringArray.join("")
        setText(newText)
        props.showAlert("Text is reversed!", "success")
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[  ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }
    
  return (
    <>
    <div className="container" style={{color:props.mode===`dark`? `white`:`black`}}>
        <h1 className = "mb-4">{props.heading}</h1>
        <div className=" mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`dark`? `#13466e`:`white`, color:props.mode===`dark`? `white`:`#042743`}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled ={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled ={text.length === 0} className="btn btn-info mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled ={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled ={text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleReverse}>Reverse Text</button>
        <button disabled ={text.length === 0} className="btn btn-info mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled ={text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>

    <div className="container my-3" style={{color:props.mode===`dark`? `white`:`black`}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element) => {
            return element.length !== 0
        }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => {
            return element.length !== 0
        }).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
