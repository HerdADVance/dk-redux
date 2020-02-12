import React from "react";
import { render } from "react-dom";
//import { Router, Link } from "@reach/router"

import InitializationContainer from './../containers/InitializationContainer';
import PlayersContainer from './../containers/PlayersContainer';
import LineupsContainer from './../containers/LineupsContainer';


const Application = () => {
  
  return (
    <main className="application">
    	<InitializationContainer />
    	<PlayersContainer />
    	<LineupsContainer />
    </main>
  );

};

export default Application;