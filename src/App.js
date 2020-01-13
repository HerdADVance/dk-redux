import React, { useState } from "react";
import { render } from "react-dom";
//import { Router, Link } from "@reach/router"

import PlayerSelectWindow from './PlayerSelectWindow'
import LineupsWindow from './LineupsWindow'

const App = () => {
  
  //const themeHook = useState("dodgerblue")

  return (
    <div className="wrapper">
    	<PlayerSelectWindow />
    	<LineupsWindow />
    </div>
  );

};

render(<App />, document.getElementById("root"));
