import React from "react";
import {
  Grid,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as CommentIcon } from "../images/bubble.svg";
import background from "../images/bg-img.png";

const useStyles = makeStyles(() => ({
  box: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${background})`,
  },
  subBox: {
    opacity: '0.85',
    background: 'linear-gradient(#3A8DFF, #86B9FF)',
  },
  subGrid: {
    height: '100%',
    padding: '3.5rem',
  },
}));

export default function SideBanner() {
  const classes = useStyles();

  return (
    <Box 
      width="100%" 
      height="700px" 
      position="relative" 
      className={classes.box}
    >
      <Box
        width="100%"
        height="100%"
        position="absolute" 
        className={classes.subBox}
        />
      <Box
        height= "100%"
        top={-45}
        position="absolute" 
      >
        <Grid 
          item 
          container 
          direction="column"
          alignItems="center" 
          justifyContent="center" 
          className={classes.subGrid}
        > 
          <Box padding="5px">
            <CommentIcon />
          </Box>
          <Box
            padding= "2rem"
            fontSize= "26px"
            color= "#FFFFFF"
            textAlign= "center"
            lineHeight={1.5}
          >
            Converse with anyone with any language
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
