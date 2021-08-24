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

import { register } from "./store/utils/thunkCreators";
import FormWrapper, { useStyles } from "./components/FormWrapper";

const Login = (props) => {
  const classes = useStyles();
  const { user, register } = props;

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await register({ username, email, password });
  };

  if (user.id) {
    return <Redirect to="/home" />;
  }

  return (
    <FormWrapper>
      <Typography variant="h4" component="h3">Create an account.</Typography>
      <form onSubmit={handleRegister}>
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
                pb={3}
                fontSize="fontSize"
                color="secondary.main">Username</Box>
            </FormLabel>
            <FormControl>
              <TextField
                aria-label="username"
                name="username"
                type="text"
                required
              />
            </FormControl>
            <FormLabel>
              <Box
                pt={6}
                pb={3}
                fontSize="fontSize"
                color="secondary.main">E-mail address</Box>
            </FormLabel>
            <FormControl>
              <TextField
                aria-label="e-mail address"
                type="email"
                name="email"
                required
              />
            </FormControl>
            <FormLabel>
              <Box
                pt={6}
                pb={3}
                fontSize="fontSize"
                color="secondary.main">Password</Box>
            </FormLabel>
            <FormControl>
              <TextField
                aria-label="password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
                required
              />
            </FormControl>
          </Grid>
          <Box textAlign="center">
            <Button color="primary" type="submit" variant="contained" size="large" className={classes.button}>
              Create
            </Button>
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
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
