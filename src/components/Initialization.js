import React, { Component } from "react";

const Initialization = ({ createSlot, createLineup }) => {
  
  function handleClick(){

  	for(var i=1; i<101; i++){
  		
  		createSlot()

  		for(var j=0; j<8; j++){
  			//createSlot();
  		}
  	}
  }


  return (
    <div>
    	<button onClick={() => handleClick()}>Create 100 Lineups</button>
    </div>
  );


};

export default Initialization;