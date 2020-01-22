import React, { useState } from "react";
import { render } from "react-dom";
//import { Router, Link } from "@reach/router"

import PlayersContainer from './../containers/PlayersContainer'
//import LineupsWindow from './LineupsWindow'

const Application = () => {
  
  //const themeHook = useState("dodgerblue")

  return (
    <main className="application">
    	<PlayersContainer />
    </main>
  );

};

export default Application;