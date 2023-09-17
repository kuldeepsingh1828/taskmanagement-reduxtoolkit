import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <Paper className={classes.footer}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </Typography>
    </Paper>
  );
}

export default Footer;
