
import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { login } from "../store/utils/thunkCreators";
import SideBanner from "./SideBanner";

export const useStyles = makeStyles((matches) => ({
  root: {
    width: '100vw',
    height: '100vh',
    minWidth: '320px',
    overflow: 'hidden',
    background: '#F2F2F2',
  },
  grid: {
    height: 'inherit',
  },
  subGrid: {
    height: '100%',
  },
  form: {
    height: '358px',
    margin: matches => matches ? '' : '0 1rem',
    padding: matches => matches ? '2rem' : '',
    width: matches => matches ? '380px' : '-webkit-fill-available',
  },
  topButton: {
    fontWeight: '600',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 3px 15px 0px',
    padding: matches => matches ? '1em 2em' : '0.5em 1em',
    margin: matches => matches ? '' : '0.5rem 1rem 0 0.5rem',
  },
  button: {
    padding: '1em 4em',
    margin: '3.5rem auto',
  },
}));

const Login = ({ children }) => {
  const matches = useMediaQuery('(min-width:750px)');
  const smMatches = useMediaQuery('(min-width:600px)');
  const classes = useStyles(matches);
  const history = useHistory();

  const isLogin = history.location.pathname === '/login';

  return (
    <Grid 
      container
      alignItems="center" 
      justifyContent="center"  
      className={classes.root}
    >
      <Box bgcolor="secondary.light" width={matches ? 1024 : 1} height={smMatches ? 700 : 1}>
        <Grid container item className={classes.grid}>
          {smMatches && <Grid container alignItems="center" justifyContent="center" item sm={5}>
            <SideBanner />
          </Grid>}
          <Grid container justifyContent="center" item xs={12} sm={7}>
            <Box position="relative" width={1}>
              <Box position="absolute" right={isLogin ? -20 : 0} width={1} p={2}>
                <Grid container alignItems="baseline" justifyContent="flex-end" item>
                  <Box fontSize="fontSize" color="secondary.main">{isLogin ? `Don't have an account?` : 'Already have an account?'}</Box>
                  <Button 
                    color="primary"
                    onClick={() => history.push(isLogin ? "/register" : "/login")} 
                    className={classes.topButton}>{isLogin ? 'Create account' : 'Login'}</Button>
                </Grid>
              </Box>
              <Grid 
                item 
                container 
                direction="column"
                justifyContent="center" 
                alignItems="center"
                className={classes.subGrid}
              >
                <Box className={classes.form}>
                  {children}
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => {
      dispatch(login(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
