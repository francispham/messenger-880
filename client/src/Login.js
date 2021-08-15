
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { login } from "./store/utils/thunkCreators";
import SideBanner from "./components/SideBanner";

export const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    background: '#F2F2F2',
  },
  grid: {
    width: '1024px',
    height: '700px',
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
  topButton: {
    padding: '1em 2em',
    fontWeight: '600',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 3px 15px 0px'
  },
  button: {
    padding: '1em 4em',
    margin: '3.5rem auto',
  },
}));

const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
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
      <Grid container item className={classes.grid}>
        <Grid container alignItems="center" justifyContent="center" item xs={12} sm={5}>
          <SideBanner />
        </Grid>
        <Grid container justifyContent="center" item xs={12} sm={7}>
          <Box position="relative" width="100%">
            <Box position="absolute" right={0} width="100%" padding={2}>
              <Grid container alignItems="baseline" justifyContent="flex-end" item>
                <Box fontSize="fontSize" color="secondary.main">Don&#39;t have an account?</Box>
                <Button 
                  color="primary" 
                  onClick={() => history.push("/register")} 
                  className={classes.topButton}>Create account</Button>
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
