import React, { Component } from "react";

const Initialization = ({ lid, sid, createSlot, createLineups }) => {
  
  function handleClick(){

  	// for(var i=0; i<100; i++){
  		
  	// 	createLineup(lid);

  	// 	for(var j=0; j<8; j++){
  	// 		//createSlot(lid, sid);
   //      sid ++;
  	// 	}

   //    lid++;
  	// }

    createLineups(100, 1, 1);
    createSlots(100, 1, 1);

  }


  return (
    <div>
    	<button onClick={() => handleClick()}>Create 100 Lineups</button>
    </div>
  );


};

export default Initialization;