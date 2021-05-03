import React from 'react'
import { AppBar, Toolbar } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons"
import { List, ListItem, ListItemText } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Container } from "@material-ui/core"
import IMAGES from './Image'
import './Header.css';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    float: `right`,
    justifyContent: `space-between`
  },
  logoImg: {
    height: `100px`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
});

const navLinks = [
    { title: `services`, path: `/product`, id: `Service` },
    { title: `about us`, path: `/about-us`, id: `About` },
    { title: `blog`, path: `/blog`, id: `About` },
    { title: `client`, path: `/product`, id: `Client` },
    { title: `testimonial`, path: `/faq`, id: `Testimonial` },
    { title: `contact`, path: `/contact`, id: `Contact` },
  ]



  const Header = () => {
    const classes = useStyles();
    return (
      <AppBar position="static">
        <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
        <img src={IMAGES.LOGO} className={classes.logoImg} />
        {/* <IconButton edge="start" color="inherit" aria-label="home">
          <Home fontSize="large" />
        </IconButton> */}
        <List
         component="nav"
          aria-labelledby="main navigation"
              className={classes.navDisplayFlex} // this
        >
      {navLinks.map(({ title, path }) => (
        <a href={path} key={title} className={classes.linkText}  >
         <ListItem button>
            <ListItemText primary={title} />
         </ListItem>
        </a>
     ))}
</List>
</Container>
        </Toolbar>
      </AppBar>
    )
  }
  export default Header

