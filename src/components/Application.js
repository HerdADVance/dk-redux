import React from "react";
import { render } from "react-dom";
//import { Router, Link } from "@reach/router"

import Initialization from './Initialization';
import PlayersContainer from './../containers/PlayersContainer';
import LineupsContainer from './../containers/LineupsContainer';

const Application = () => {
  
  //const themeHook = useState("dodgerblue")

  return (
    <main className="application">
    	<Initialization />
    	<PlayersContainer />
    	<LineupsContainer />
    </main>
  );

};

export default Application;