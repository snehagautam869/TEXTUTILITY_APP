import React, {useState} from 'react'

export default function Textform(props) {
  const[text,settext] = useState('');
  const handleUpClick =()=>
  {
    // console.log("Uppercase Clicked" + text)
    let newtext= text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to UpperCase!","success");
  }
  const handleonchange =(event)=>
  {
    // console.log("On Changed!")
    settext(event.target.value);
  }
  const handlelowClick =()=>
  {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to LowerCase!","success");
  }
  const handlelclearClick=()=>
  {
    let newtext = ('');
    settext(newtext);
    props.showAlert("Text Cleared!",
    "success");
  }
  const handlelcopyClick=()=>
  {
    console.log("I am copy");
    var text = document.getElementById("textbox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to ClipBoard!","success");
  }
  const handlextraspaces=()=>
  {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "))
    props.showAlert("Removed Extra Spaces!","success");
  }
  
  //settext("New Text");//correct way to change the state
  //text = "new text";// wrong way to change state
  return (
   <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color:props.mode === 'dark'?'white':'black'}}  id="textbox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handlelowClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handlelclearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handlelcopyClick}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-info mx-1 my-1" onClick={handlextraspaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color:props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>
      {
        return element.length!==0
      }).length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").filter((element)=>
      {
        return element.length!==0
      }).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to preview!"}</p>
    </div>
   </>
  )
}
