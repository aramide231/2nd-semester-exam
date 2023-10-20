import React, { useState,   useEffect } from 'react';

import './style.css';

function Loader() {
  return  <div className="loader"></div>
}

function Content () {
  const [counter, setCounter] = useState(0);
  const [figure, setFigure] = useState("");

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter((prev) => prev - 1);
  };

  const Reset = (event) => {
    event.preventDefault();
    setCounter(0);
  };

  const appendFigure = () => {
    setCounter((prev) => Number(String(prev) + figure));
  };

  const handleFigureChange = (event) => {
    setFigure(event.target.value);
  };
  
  return (
    <section className="center">
      <h1 className="people ">{counter}</h1>
      <h1 className= "handle">
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={Reset}>reset</button>
      </h1>
      <section className="form">
        <input
          type="text"
          placeholder="Enter a figure"
          value={figure}
          onChange={handleFigureChange}
        />
        <button className="submit" onClick={appendFigure}>append</button>
      </section>
    </section>
  );
}




function App() {
  const [isLoading, setIsLoading] = useState(true); 

  
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  return <section className="main-container">
  {isLoading ? <Loader/> : <Content/>}
</section>;

export default App;
