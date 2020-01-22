import React, { useState } from "react";
import { render } from "react-dom";
//import { Router, Link } from "@reach/router"

import PlayersContainer from './../containers/PlayersContainer';
import LineupsContainer from './../containers/LineupsContainer';

const Application = () => {
  
  //const themeHook = useState("dodgerblue")

  return (
    <main className="application">
    	<PlayersContainer />
    	<LineupsContainer />
    </main>
  );

};

export default Application;