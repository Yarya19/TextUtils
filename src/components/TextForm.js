import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("On Change"); 
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  
    return (
        <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'rgb(32 49 69)':'white', color: props.mode === 'dark'?'white':'black'}}></textarea> 
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3 " >
        <h2>Your text summary</h2>
        <p>{text.length === 0 ? 0 : text.split(" ").length-1 } words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter the text to preview here'}</p>
    </div>        
        </>
  )
}
