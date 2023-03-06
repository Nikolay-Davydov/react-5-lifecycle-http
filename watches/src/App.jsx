import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Clock from "./components/AddClocks/AddClocks";
import INIT_TIMES from "./components/AddClocks/DataClocks";

function App() {
  const [times, setTimes] = useState(INIT_TIMES);

  const handleAddTimes = (newTime) => {
    setTimes((prevTimes) => [...prevTimes, newTime]);
  };

  const removeTime = (id) => {
    setTimes((prevTimes) => prevTimes.filter((time) => time.id !== id));
  };

  return (
    <div className="App">
      <Form onSubmit={handleAddTimes} />
      {times.map((time) =>
        < Clock 
          times={times} 
          key={time.id} 
          offset={time.timezone} 
          title={time.name} 
          id={time.id} 
          removeTime={() => removeTime(time.id)} 
        />
      )}
    </div>
  )
}

export default App
