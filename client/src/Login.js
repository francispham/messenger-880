
import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  Grid,
  Box,
  Button,
  TextField,
  FormLabel,
  Typography,
  FormControl,
} from "@material-ui/core";

import { login } from "./store/utils/thunkCreators";
import FormWrapper, { useStyles } from "./components/FormWrapper";

const Login = (props) => {
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
    <FormWrapper>
      <Typography variant="h3" component="h3">Welcome Back</Typography>
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
                pt={4}
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
                pt={5}
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
    </FormWrapper>
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
