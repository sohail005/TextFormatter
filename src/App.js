import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#000'
      ShowAlert("Dark mode has enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      ShowAlert("Light mode has enabled", "success");
    }
  }
  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <Router>
        <Navbar title="Sample React App" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextForm showAlert={ShowAlert} mode={mode} heading="Enter the text to analyze below" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
