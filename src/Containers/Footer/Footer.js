import React from 'react';
import classes from './Footer.module.css';

const Footer = props => {
return (
  <footer className={classes.Footer}>
    <span>Lukas Meier</span>
    <span>Copyright 2020 &copy;</span>
  </footer>
);
}

export default Footer;