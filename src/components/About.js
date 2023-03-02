import React from 'react'

export default function About(props) {

let myStyle = {
    color: props.mode === "dark"? "white": "black",
    backgroundColor: props.mode === "dark"? "rgb(36 74 104)": "white"
}    

    /*

            ENABLE DARK MODE BUTTON IN ABOUT ACCORDION

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    const toggleStyle= () =>{
        if(myStyle.color === 'black')
        {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border:'1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    */

  return (
    <div className = "container" style={{color: props.mode === "dark"? "white": "#rgb(36 74 104)"}}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Analyze your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Textutils gives you a way to analyze your text quickly and efficiently.</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils is a free character counter tool that provides instant character and word count for a given text.</strong> 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera.</strong> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
