import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
  },
  imageItem: {
    width: '100px',
    height: '100px',
    borderRadius: '5px',
    padding: theme.spacing(0),
  },
}));

export default function ImagesList({ imageFiles, attachments }) {
  const classes = useStyles();
  const isImageFiles = imageFiles?.length > 0;
  const images = isImageFiles ? imageFiles : attachments;

  return (
    <Grid container direction="row" justifyContent="center" spacing={2} className={classes.root}>
        {images?.map((item) => (
          <Grid item key={isImageFiles ? item.name : item}>
            <img src={isImageFiles ? URL.createObjectURL(item) : item} alt={item?.name || item} className={classes.imageItem}/>
          </Grid>))} 
    </Grid>
  );
}
