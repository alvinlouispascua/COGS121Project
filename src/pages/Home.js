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
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconShelter from './IconShelter.png';
import IconHealthcare from './IconHealthcare.png';
import IconFood from './IconFood.png';


const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: '#eaeaf7',
    },
  },
  root: {
    flexGrow: 1,
  },
  toolbarTitle: {
    flex: 1,
  },
  card: {
    width: 220,
  },
    cardAction: {
    textAlign: 'initial',
    width: '100%',
    height: '100%',
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
    backgroundColor: theme.palette.white,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit,
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
    description: ['Fight the elements and find the nearest shelters!'],
    link:'/Shelter',
    icon: IconShelter
  },

  {
    title: 'Healthcare',
    description: [
      'Get patched-up today at excellent clinics!'
    ],
    link:'/Health',
    icon: IconHealthcare

  },
  {
    title: 'Food Banks',
    description: [
      'Find the food banks that are nearest to you!'
    ],
    link: '/Food',
    icon: IconFood
  },
];

function Pricing(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Homeless in San Diego
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            Find resources to help you get back on your feet. 
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container className={classes.root} justify="center" alignItems="flex-start" spacing={24}>
          {tiers.map(tier => (
            <Grid item key={tier.title} xs={12} md='auto'>
              <Card className={classes.card}>
                <ButtonBase className={props.classes.cardAction}>

          <Link to={tier.link} style={{ textDecoration: 'none' }}>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardMedia 
                image={tier.icon}
                style={{height: 90, width: 90, margin: 'auto'}}
                />
                <CardContent>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="left" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                </Link>
                </ButtonBase>
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