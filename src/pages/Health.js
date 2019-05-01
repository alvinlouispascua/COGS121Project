import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

function Health() {
  return (
    <div className="Health">
      <header className="App-header">
      Health
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

export default Health;
