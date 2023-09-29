import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme, styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//TypeScript
import IVersionOfAPI from './ts/IVersionOfAPI';
import IAccount from './ts/IAccount';
//Fetches
import FetchVersionOfAPI from './fetches/FetchVersionOfAPI';
import FetchAccounts from './fetches/FetchAccounts';
//Pages
import ListingOfTransparentAccounts from './pages/ListingOfTransparentAccounts';
import TransparentAccount from './pages/TransparentAccount';
import ViewPayment from './pages/ViewPayment';
//Components
import VersionOfAPI from './components/VersionOfAPI';
//Redux/RTK
import { useDispatch, useSelector } from 'react-redux';
import { setVersionOfAPI } from './redux-rtk/apiSlice';
import { setAccounts } from './redux-rtk/bankSlice';

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

const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  //Retrieve stuff from Redux storage 
  useEffect(() => {
    const version_of_api: Promise<IVersionOfAPI> = FetchVersionOfAPI();
    const list_accounts: Promise<IAccount[]> = FetchAccounts();
    //
    Promise.all([version_of_api, list_accounts]).then((result) => {
      dispatch(setVersionOfAPI(result[0]))
      dispatch(setAccounts(result[1]))
    })
  }, []) //<- Initial render only

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.root}>
        {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>*/}
        <Item>
          <span>Bank</span>
        </Item>
        {/*</div>*/}
        <div>&nbsp;</div>
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
        <Grid container spacing={2}>
          <Grid item xs={2} md={2}>
            {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>-empty-</div>*/}
          </Grid>
          <Grid item xs={8} md={8}>
            {/*<Item>xs=8 md=8</Item>*/}
            {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>*/}
            <Item>
              <Routes>
                <Route path="/" element={<ListingOfTransparentAccounts />} />
                <Route path="/account/:accountNumber" element={<TransparentAccount />} />
                <Route path="/account/:accountNumber/payment/:paymentNumber" element={<ViewPayment />} />
              </Routes>
            </Item>
            {/*</div>*/}
          </Grid>
          <Grid item xs={2} md={2}>
            {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>-empty-</div>*/}
          </Grid>
        </Grid>
        {/*<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <VersionOfAPI />
      </div>*/}
        <Item>
          <VersionOfAPI />
        </Item>
      </div>
    </Router >
  );
}

export default App;
