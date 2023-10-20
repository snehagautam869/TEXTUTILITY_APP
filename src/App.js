import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
/* Project 1 -- text utilities -- no of words,extrs space remove,capitilize,lower to upper etc i.e one text box where you upload your text  */
function App() {
  const[mode,setMode]=useState('light');//method tell wheater dark mode is enabled or not
  const[alert,setAlert]=useState(null);

  const showAlert =(message, type)=>
  {
    setAlert(
      {
        msg:message,
        type:type
      }
    )
    setTimeout(()=>
    {
      setAlert(null);
    },1500)
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  // }

  const togglemode=(cls)=>
  {
    // removeBodyClasses(); 
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light')
    {
    setMode('dark');
    document.body.style.backgroundColor ='#042743';
    showAlert("Dark Mode has been Enabled", "success");
    // document.title = 'TextUtilis - Dark Mode';
    // to attract user mind things but it not a good experience for user
    // setInterval(()=>
    // {
    //   document.title = 'TextUtilis Is Amazing Mode'
    // },2000);
    // setInterval(()=>
    // {1
    //   document.title = 'Install TextUtilis Now'
    // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has been Enabled","success");
      // document.title = 'TextUtilis - Light Mode';
    }
  }
  return (
    <>
    {/* // /users -- comp 1
    // /users/home-comp 2  // it call comp 1 exact path reason  */}
    <Router>
      <Navbar title="TextUtilis" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<Textform showAlert={showAlert}heading=" Try TextUtilis - Word Counter, Character counter ,Remove Extra Spaces" mode={mode}/>}/>
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
//  {/* <Textform showAlert={showAlert}heading="Enter the text to Analyze below" mode={mode}/> */}
//         {/* <About/> */}