//it will start after npm start
// import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode]= useState("light"); //whether mode is light or dark
  const [redMode, setRedMode]= useState("light"); //whether mode is light or dark
  const [buttonColor, setButtonColor]= useState("primary"); //whether mode is light or dark
  const [alert, setAlert]= useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
// it will remove body classes to avoid same color of pallete every time
  const removebodyClasses=()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-warning")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-light")
  }
  
  
  const toggleMode = (cls)=>{
      removebodyClasses();
      document.body.classList.add('bg-'+ cls)

      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success")
        // document.title = "Text Utils in Dark Mode"
        // setInterval(() => {
        //   document.title = "TextUtil is amazing"
        // }, 2000);
        // setInterval(() => {
        //   document.title = "Install text Util Now"
        // }, 1500);

      } else{
        setMode("light");
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success")
        // document.title = "Text Utils in Light Mode"
      }
    }

    const toggleRed = ()=>{
      if(redMode === "light"){
        setRedMode("dark");
        document.body.style.backgroundColor = 'orangered';
        showAlert("Red mode has been enabled", "success")
        setButtonColor("danger")
        // document.title = "Text Utils in Red Mode"
      } else{
        setRedMode("light");
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success")
        setButtonColor("primary")
        // document.title = "Text Utils in Light  Mode"
      }
    }
  return ( 
    <>
    <Router>
    {/* <Navbar title="textUtils" aboutText="About"/> */}
    <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} aboutText='About' redMode={redMode} toggleRed={toggleRed}/>
    <Alert alert={alert}/>
    <div className="container">
    
     {/* A Routes looks through its children <Route>s and renders the first one that matches the current URL. */}
     {/* /users --> component1
     /users/home --> component2 therefore important to use exact in path */}
    <Routes>
        <Route exact path="/" element={<Textform heading="Try TextUtils- Word Counter, Character Counter" buttonColor={buttonColor} mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode={mode} />} />
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

// correct and complete the tag like img or anchor tag
// replace the href="/" from href="#"