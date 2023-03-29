import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import useElementOnScreen from './utils/intersectionObserver'

function App() {
      const [containerRef, isVisible] = useElementOnScreen({
      root:null,
      rootMargin: "0px",
      threshold:1,
    })

  return (
    <div className="App">
      <div className="isVisible">{isVisible ? "Now you see me!": "Now you don't"}</div>
      <div className="section"></div>
      <div className="box" ref={containerRef}></div>
    </div>
  );
}

export default App;
