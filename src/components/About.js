// import React, { useState } from 'react'
import React from "react"
export default function About(props) {
    let mystyle ={
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104':'white',
    }
    // const[mystyle,setstyle] =useState(
    //     {
    //         color: 'black',
    //         backgroundColor : 'white'
    //     }
    // )
    // const[btntext,settext]=useState('Enable Dark Mode')
    // const togglestyle =()=>
    // {
    //     if(mystyle.color==='black')
    //     {
    //         setstyle(
    //             {
    //                 color:'white',
    //                 backgroundColor:'black',
    //                 border:'2px solid white'
    //             }
    //         )
    //         settext('Enable Light Mode')
    //     }
    //     else{
    //         setstyle(
    //             {
    //                 color:'black',
    //                 backgroundColor:'white'
    //             }
    //         )
    //         settext('Enable Dark Mode')
    //     }
    // }
  return (
    <div className="container" >
        <h1 className='my-3'style={{color: props.mode ==='dark'?'white':'#042743'}}>ABOUT US </h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Tap Here:-
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                <strong>Analyze Your Text:-</strong><br />TextUtilis gives you a way to analyze your text quickly and efficiently.Be it word count,character count or <br /><br />
                <strong>Free to Use:-</strong><br />
                TextUtilis is a free character counter tool that provides instant character count & word count statistics for a given text.TextUtilis reports the number of words and chracters .Thus it is suitable for writing text with word/charcter limits. <br /><br />
                <strong>Browser Compatible</strong><br />
                This word counter software works in any web browsers such as chrome, firefox, Internet Explorer , Safari ,Opera.It suits to count chracters in facebook, blog ,books, excel document, pdf document ,essays,etc.
            </div>
            </div>
        </div>
          {/* <button onClick={togglestyle} type='button' className='btn btn-outline-dark my-3'>{btntext}</button> */}
    </div>
    </div>
  )
}
