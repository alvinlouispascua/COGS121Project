import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

function Food() {
  return (
    <div className="Food">
      <header className="App-header">
      Food
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

export default Food;
