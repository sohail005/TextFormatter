import { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a0336'
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="Sample React App" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter the text to analyze below" />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
