import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(32 49 69)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'rgb(248 248 250)';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
        <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} ToggleMode={ToggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route exact path="/TextUtils" element={
            <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />}></Route> 
            <Route exact path="/about" element=
             {<About mode={mode}/>} 
            ></Route> 
           </Routes> 
      </div>
       </Router> 
      </>
  );
}

export default App;
