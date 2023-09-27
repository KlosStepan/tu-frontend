import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Fetches
import FetchVersionOfAPI from './fetches/FetchVersionOfAPI';
//Pages
import ListingOfTransparentAccounts from './pages/ListingOfTransparentAccounts';
import TransparentAccount from './pages/TransparentAccount';
import ViewPayment from './pages/ViewPayment';
//Components
import VersionOfAPI from './components/VersionOfAPI';


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
    //Promise.all([viditelnost, pouziti, klasifikace, rodiny_povrchu, rodiny_vybaveni]).then((result) => {
    //Promise.all([fetch1, fetch2, fetch3]).then(
    //setF1(fetch1);
    //setF2(fetch2);
    //setF3(fetch3);
    //)
  }, []) //<- Initial render only
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.root}>
        <div>-Header-</div>
        <Routes>
          <Route path="/" element={<ListingOfTransparentAccounts />} />
          <Route path="/account/:accountNumber" element={<TransparentAccount />} />
          <Route path="/account/:accountNumber/payment/:paymentNumber" element={<ViewPayment />} />
        </Routes>
        <>
          {/*<div><span>v-Page START-v</span>
        <div>Logged in as <u>2002222222</u></div>
        <div>
          <Balance />
        </div>
        <div>|Dropdown v| - SELECTED Account (2002222222)</div>
        <div>Table - filter <u>"ownAccountNumber": "2002222222",</u> //probably picked from Redux</div>
        <div>Further filtering, at least 5x</div>
        <div>transactions.map(...</div>
        <div>...)</div>
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
        <span>^-Page END-^</span></div>*/}
        </>
        <div>
          <VersionOfAPI />
        </div>
      </div>
    </Router>
  );
}

export default App;
