import React, { useState } from "react";
import { render } from "react-dom";
//import { Router, Link } from "@reach/router"

import PlayerSelectWindow from './PlayerSelectWindow'
import LineupsWindow from './LineupsWindow'

const Application = () => {
  
  //const themeHook = useState("dodgerblue")

  return (
    <main className="application">
    	<PlayerSelectWindow />
    	<LineupsWindow />
    </main>
  );

};

export default Application;