import React from "react";
import { Grid, Box } from "@material-ui/core";
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
}));

export default function SideBanner() {
  const classes = useStyles();

  return (
    <Box 
      width={1}
      height={700}
      position="relative" 
      className={classes.box}
    >
      <Box
        width={1}
        height={1}
        position="absolute" 
        className={classes.subBox}
        />
      <Box
        top={-40}
        left= {0}
        right= {0}
        height= {1}
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
          <CommentIcon />
          <Box
            py={5}
            px={7}
            fontSize= "26px"
            lineHeight={1.5}
            textAlign= "center"
            color= "secondary.light"
          >
            Converse with anyone with any language
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
