import React from "react";
import {
  Grid,
  Box,
  useMediaQuery,
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
    height: '100%',
    background: 'linear-gradient(#3A8DFF, #86B9FF)',
  },
  subGrid: {
    height: '100%',
    padding: '0.5rem',
  },
  subGrid600: {
    padding: '0.5rem',
  },
}));

export default function SideBanner() {
  const classes = useStyles();
  const smMatches = useMediaQuery('(min-width:600px)');
  const matches = useMediaQuery('(min-width:376px)');

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
        top={smMatches ? -45 : 0}
        left= {0}
        right= {0}
        position="absolute" 
      >
        <Grid 
          item 
          container 
          direction="column"
          alignItems="center" 
          justifyContent="center" 
          className={smMatches ? classes.subGrid : classes.subGrid600}
        > 
          <Box padding={smMatches ? "5px" : "1rem"}>
            <CommentIcon />
          </Box>
          {matches && <Box
            padding= {smMatches ? "3rem" : "0"}
            fontSize= "26px"
            color= "#FFFFFF"
            textAlign= "center"
            lineHeight={1.5}
          >
            Converse with anyone with any language
          </Box>}
        </Grid>
      </Box>
    </Box>
  );
}
