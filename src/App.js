import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Quotes from "./Components/Quotes";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/resumeData.json`)
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);
  
  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.portfolio} />
      <Resume data={resumeData.resume} />
      <Quotes data={resumeData.quotes} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
