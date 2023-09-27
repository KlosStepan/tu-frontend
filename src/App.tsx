import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import './App.css';
//Components
import Balance from './components/Balance';
import VersionOfAPI from './components/VersionOfAPI';
//Fetches
import FetchVersionOfAPI from './fetches/FetchVersionOfAPI';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function App() {
  const classes = useStyles();
  useEffect(() => {
    console.log("useEffect in App.tsx")
  }, []) //<- Initial render only
  return (
    <div className={classes.root}>
      <div>Logged in as <u>2002222222</u></div>
      <div>
        <Balance />
      </div>
      <div>|Dropdown v| - SELECTED Account (2002222222)</div>
      <div>Table - filter <u>"ownAccountNumber": "2002222222",</u> //probably picked from Redux</div>
      <div>Further filtering, at least 5x</div>
      <div>transactions.map(...</div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12 |1</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6 |2</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6 |3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 |4</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 |5</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 |6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 |7</Paper>
        </Grid>
      </Grid>
      <div>
        <VersionOfAPI />
      </div>
    </div>
  );
}

export default App;
