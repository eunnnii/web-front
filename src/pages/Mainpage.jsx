import React from 'react';
import { makeStyles, Theme } from '@mui/styles';
import debounce from 'lodash.debounce';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  },
  mainWrapper: {
    display: 'flex',
    marginTop: 100
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1)
  },
  svg: {
    width: 100,
    height: 100
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
}));

export default function MainPage() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <div className={classes.mainWrapper}>
        메인화면
      </div>
    </div>
  );
}
