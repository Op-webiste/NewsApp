import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { useState } from 'react'
import{BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


function App() {
  const[progress, setProgress]=useState(0)
  const[clr, setClr]=useState("bg-body-tertiary")
  const[textclr, setTextClr]=useState("text-black")
  const[text, setText]=useState("Enable Dark Mode")
  const[bodyClr, setbodyClr]=useState("white")
  const changeMode=()=>{
    if(clr==="bg-body-tertiary"){
      setClr("bg-dark navbar-dark")
      setTextClr("text-white")
      setText("Disable Dark Mode")
      setbodyClr("grey")

    }
    else{
     setClr("bg-body-tertiary")
     setTextClr("text-black")
     setText("Enable Dark Mode")
     setbodyClr("white")


    }
  }

  let pageSize = 10;
  return (
   <>
   <Router>
   <style>{`body { background-color: ${bodyClr}; }`}</style>
   <LoadingBar
        color='#f11946'
        progress={progress}
      />
   <Navbar clr={clr} textclr={textclr} text={text} changeMode={changeMode}/>
    <Routes>
   <Route exact path="/NewsApp" element={<News  key="business" setProgress={setProgress} category="business" pageSize={pageSize}/>}></Route>
   <Route exact path="/NewsApp/general" element={<News  key="general" setProgress={setProgress} category="general" pageSize={pageSize}/>}></Route>
   <Route exact path="/NewsApp/science" element={<News  key="science" setProgress={setProgress} category="science" pageSize={pageSize}/>}></Route>
   <Route exact path="/NewsApp/sports" element={<News  key="sports" setProgress={setProgress} category="sports" pageSize={pageSize}/>}></Route>
   <Route exact path="/NewsApp/health" element={<News  key="health" setProgress={setProgress} category="health" pageSize={pageSize}/>}></Route>
   <Route exact path="/NewsApp/entertainment" element={<News  key="entertainment" setProgress={setProgress} category="entertainment" pageSize={pageSize}/>}></Route>
   <Route exact path="/NewsApp/technology" element={<News  key="technology" setProgress={setProgress} category="technology" pageSize={pageSize}/>}></Route>
   </Routes>
   </Router>
   </>
  );
}

export default App;
