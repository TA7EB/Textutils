// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [mode,setMode] = useState("light");
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.background = '#182f52'
    }
    else{
      setMode('light');
      document.body.style.background = 'white'
    }

  }
  return (
    <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About Us"/>
<div className="container my-3">
<TextForm heading ="Enter text to analyze"mode={mode}/>
{/* <About/> */}
</div>
    </>
   
  );
}

export default App;
