import React from "react";
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    lineHeight: '24px',
  },
});

export default function TopBar() {
  const classes = useStyles();
  return <div className={classes.root}>
    <div className="main" style={{textAlign: "right"}}>Register | Login</div>
  </div>
}