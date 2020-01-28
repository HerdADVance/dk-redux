import React, { Component } from "react";

const Initialization = ({ lid, sid, createLineups }) => {
  
  function handleClick(){
    createLineups(100, 2, 9);
  }


  return (
    <div>
    	<button onClick={() => handleClick()}>Create 100 Lineups</button>
    </div>
  );


};

export default Initialization;