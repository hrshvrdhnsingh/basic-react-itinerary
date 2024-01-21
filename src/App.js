//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Tours from "./Tours";
import data from "./data";
import { useState } from 'react';

function App(){

  const [tours, setTours] = useState(data);

  function deleteHandler(id){
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);
  }
  function resetPage(){
    setTours(data);
  }

  if(tours.length===0){
    return (
      <div className="refresh">
        <img src="images/snorlax.gif" alt="" className="loader"></img>
        <h2 className="header">No Tours Left</h2>
        <button className="btn-refresh" onClick={resetPage}>Refresh Page</button>
      </div>
    )
  }
  
  return (
    <div className="App">
      <Tours tours={tours} deleteHandler={deleteHandler}>

      </Tours>
    </div>
  );
}

export default App;
