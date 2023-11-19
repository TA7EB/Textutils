import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Upper case was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
       
    }
    const handleLoClick = ()=>{
        // console.log("Upper case was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
       
    }
    const handleClearClick = ()=>{
        // console.log("Upper case was Clicked" + text);
        let newText = "";
        setText(newText)
       
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
        const handleOnChange = (event)=>{
            setText(event.target.value);
        }
    const [text, setText] = useState('');
    return (
      <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'#182f52'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} placeholder="Enter your text here" style={{backgroundColor:props.mode === 'dark'?'gray':'white',color:props.mode === 'dark'?'white':'#182f52'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-2"style={{color:props.mode === 'dark'?'white':'#182f52'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview here"}</p>
    </div>
      </>
  )
}
