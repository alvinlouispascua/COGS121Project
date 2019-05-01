/*
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
*/

import React from 'react';
import { Link, withRouter, NavLink} from "react-router-dom";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
    justifyContent: 'center',
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Shelters',
    description: ['Fight the elements', 'Find the nearest shelters'],
    buttonText: 'Find Shelters',
    buttonVariant: 'contained',
    link: '/Shelter',
  },
  {
    title: 'Healthcare',
    description: [
      'Find top-notch doctors and', 'get patched-up today!'
    ],
    buttonText: 'Find Physicians',
    buttonVariant: 'contained',
    link: '/Health',
  },
  {
    title: 'More Resources!',
    description: [
      'Food-Stamp Application',
      'Donated Clothing',
      'Educational Services',
      'Community Chat & Counseling',
    ],
    buttonText: 'Display Full List',
    buttonVariant: 'contained',
    link: '/Food',
  },
];

function Pricing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Resource Maps 
          </Typography>
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Find What You Need!
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            Find resources to help you get back on your feet. 
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'More Resources!' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Link to={tier.link}>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                      </Button>
                    </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
 
      {/* Footer */}
      {/* End footer */}

    </React.Fragment>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);