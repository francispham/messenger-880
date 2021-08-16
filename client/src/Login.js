
import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormLabel,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { login } from "./store/utils/thunkCreators";
import SideBanner from "./components/SideBanner";

export const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    minWidth: '320px',
    overflow: 'auto',
    background: '#F2F2F2',
  },
  box: {
    overflow: 'hidden',
  },
  grid: {
    width: '1024px',
    height: '700px',
    background: '#FFFFFF',
  },
  grid750: {
    width: '100%',
    overflow: 'auto',
    background: '#FFFFFF',
  },
  subGrid: {
    height: '100%',
  },
  form: {
    width: '380px',
    height: '358px',
    padding: '2rem',
  },
  form750: {
    width: '-webkit-fill-available',
    margin: '0 1rem',
    height: '358px',
  },
  topButton: {
    padding: '1em 2em',
    fontWeight: '600',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 3px 15px 0px'
  },
  topButton750: {
    padding: '1em 2em',
    fontWeight: '600',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 3px 15px 0px',
    margin: '1rem 0.5rem',
  },
  button: {
    padding: '1em 4em',
    margin: '3.5rem auto',
  },
}));

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:750px)');
  const smMatches = useMediaQuery('(min-width:600px)');
  const { user, login } = props;

  const handleLogin = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    await login({ username, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid 
      container
      alignItems="center" 
      justifyContent="center"  
      className={classes.root}
    >
      <Grid style={ !smMatches ? {height: "100vh"}: null } container item className={matches ? classes.grid : classes.grid750}>
        {smMatches && <Grid container alignItems="center" justifyContent="center" item sm={5}>
          <SideBanner />
        </Grid>}
        <Grid container justifyContent="center" item xs={12} sm={7}>
          <Box position="relative" width="100%">
            {!smMatches && <Box
              className={ classes.box}
              height= "25vh"
              width="100%"
            >
              <SideBanner />  
            </Box>}
            <Box position="absolute" right={0} width="100%" padding={2}>
              <Grid container alignItems="baseline" justifyContent="flex-end" item>
                <Box fontSize="fontSize" color="secondary.main">Don&#39;t have an account?</Box>
                <Button 
                  color="primary"
                  onClick={() => history.push("/register")} 
                  className={matches ? classes.topButton : classes.topButton750}>Create account</Button>
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
              <Box className={matches ? classes.form : classes.form750}>
                <Typography variant="h3" component="h3">Welcome back!</Typography>
                <form onSubmit={handleLogin}>
                  <Grid>
                    <Grid
                      item
                      container
                      direction="column"
                      justifyContent="center"
                    >
                      <FormLabel>
                        <Box
                          paddingTop={3.5}
                          fontSize="fontSize"
                          color="secondary.main">Username</Box>
                      </FormLabel>
                      <FormControl margin="normal" required>
                        <TextField
                          aria-label="username"
                          name="username"
                          type="text"
                        />
                      </FormControl>
                      <FormLabel>
                        <Box
                          paddingTop={4}
                          fontSize="fontSize"
                          color="secondary.main">Password</Box>
                      </FormLabel>
                      <FormControl margin="normal" required>
                        <TextField
                          aria-label="password"
                          type="password"
                          name="password"
                          />
                      </FormControl>
                    </Grid>
                    <Box textAlign="center">
                      <Button 
                        size="large" 
                        type="submit" 
                        color="primary" 
                        variant="contained" 
                        className={classes.button}
                      >Login</Button>
                    </Box>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
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
