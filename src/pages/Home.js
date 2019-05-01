import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const styles = theme =>( {
  button: {
    margin: theme.spacing.unit,
  },
});


class Home extends React.Component{
  render(){
    return (
      <div className="Home">
        <header className="App-header">

          <Link to="/Food">
            <Button
              variant="contained"
              color="primary"  
            >
             Food
            </Button>
          </Link> 

          <Link to="/Health">
            <Button
              variant="contained"
              color="primary"  
            >
             Health
            </Button>
          </Link> 

          <Link to="/Shelter">
            <Button
              variant="contained"
              color="primary"  
            >
             Shelter
            </Button>
          </Link> 
        </header>
      </div>
    );
  }
}

export default Home;
