import React, { useEffect } from 'react';
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Redux/RTK
import { useDispatch } from 'react-redux';
import { setVersionOfAPI } from './redux-rtk/apiSlice';
import { setAccounts } from './redux-rtk/bankSlice';
//Material UI
import { makeStyles, createStyles, Theme, styled } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//Fetches
import FetchVersionOfAPI from './fetches/FetchVersionOfAPI';
import FetchAccounts from './fetches/FetchAccounts';
//TypeScript
import IAccount from './ts/IAccount';
import IVersionOfAPI from './ts/IVersionOfAPI';
//Pages
import Accounts from './pages/Accounts';
import TransparentAccount from './pages/TransparentAccount';
import Transaction from './pages/Transaction';
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const version_of_api: Promise<IVersionOfAPI> = FetchVersionOfAPI();
    const list_accounts: Promise<IAccount[]> = FetchAccounts();
    Promise.all([version_of_api, list_accounts]).then((result) => {
      dispatch(setVersionOfAPI(result[0]))
      dispatch(setAccounts(result[1]))
    })
  }, []) //<- Initial render only

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className={classes.root}>
        <Item>
          <span>Transparent Accounts in PPF Bank</span>
        </Item>
        <div>&nbsp;</div>
        <Grid container spacing={2}>
          <Grid item xs={2} md={2}>
            {' '}
          </Grid>
          <Grid item xs={8} md={8}>
            <Item>
              <Routes>
                <Route path="/" element={<Accounts />} />
                <Route path="/accounts/:accountNumber" element={<TransparentAccount />} />
                <Route path="/accounts/:accountNumber/transactions/:transactionNumber" element={<Transaction />} />
              </Routes>
            </Item>
          </Grid>
          <Grid item xs={2} md={2}>
            {' '}
          </Grid>
        </Grid>
        <Item>
          <VersionOfAPI />
        </Item>
      </div>
    </Router >
  );
}
export default App;
