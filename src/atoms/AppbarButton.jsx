import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Theme, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  // *************************************************
  // appbar style
  // reactive :
  // down 1280px(lg)
  // between 1280p(lg) - 1440px
  // between 1440px - 1920px
  // between 1920px(xl) - 2560px
  // up 2560px
  // *************************************************
  buttonItemStyle: {
    // margin: theme.spacing(2),
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'transparent' // button hover시 효과지우기
    },
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.down('lg')]: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '23px'
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '25px'
    }
  },
  buttonActiveItemStyle: {
    // margin: theme.spacing(2),
    color: theme.palette.grey[600],
    '&:hover': {
      backgroundColor: 'transparent' // button hover시 효과지우기
    },
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '7px',
      fontSize: '16px'
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: '23px'
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '25px'
    }
  },
  buttonImg: {
    [theme.breakpoints.down('lg')]: {
      height: '30px'
    },

    [theme.breakpoints.between('lg', 'xl')]: {
      height: '40px'
    },
    [theme.breakpoints.up('xl')]: {
      height: '45px'
    }
  },
  ActiveButtonImg: {
    [theme.breakpoints.down('lg')]: {
      height: '30px'
    },

    [theme.breakpoints.between('lg', 'xl')]: {
      height: '40px'
    },
    [theme.breakpoints.up('xl')]: {
      height: '45px'
    }
  },
  gridStyle: {
    display: 'flex',
    width: '120px',
    justifyContent: 'center'
  },
  rootStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 'fit-content',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '20px'
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: '0px'
    }
  }
}));

// interface buttonProps {
//   endPoint: string;
//   buttonName: string;
//   isActive: boolean;
//   currIndex: number;
//   handleIndexChange: (newIndex: number) => void;
// }

export default function AppbarButton(data) {
  const { endPoint, buttonName, isActive, currIndex, handleIndexChange } = data;
  const classes = useStyles();
  const history = useNavigate();

  const handleRemoteButtonClick = (goTo, index) => {
    history(`${goTo}`);
    handleIndexChange(index);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  };

  return (
    <div className={classes.rootStyle}>
      <div className={classes.gridStyle}>
        <img
            src="/logo192.png"
            alt="buttonInactive"
            className={classes.ActiveButtonImg}
          />
        {isActive ? (
          <Button
            disableRipple
            color="inherit"
            onClick={() => handleRemoteButtonClick(endPoint, currIndex)}
            className={classes.buttonItemStyle}
          >
            {buttonName}
          </Button>
        ) : (
          <Button
            disableRipple
            color="inherit"
            onClick={() => handleRemoteButtonClick(endPoint, currIndex)}
            className={classes.buttonActiveItemStyle}
          >
            {buttonName}
          </Button>
        )}
      </div>
    
    </div>
  );
}
