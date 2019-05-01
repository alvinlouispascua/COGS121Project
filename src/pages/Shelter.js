import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

function Shelter() {
  return (
    <div className="Shelter">
      <header className="App-header">
      Shelter
      <Link to="/">
	    <Button
	      variant="contained"
	      color="primary"  
	    >
	     Back
	    </Button>
      </Link> 
      </header>
    </div>
  );
}

export default Shelter;
