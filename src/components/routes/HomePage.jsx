import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import projectsData from 'data/projects.json';
import aboutData from 'data/about.json';
import Projects from 'components/Projects';
import Resume from 'components/Resume';
import { hot } from 'react-hot-loader';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Publications from 'components/Publications';
import publicationsData from 'data/publications.json';
import classNames from 'classnames';
import Contact from 'components/Contact';
import { Facebook, Linkedin, Twitter, Instagram } from 'mdi-material-ui';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  white: {
    color: '#fff',
  },
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    width: 200,
    height: 200,
  },
  odd: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: 40,
    paddingBottom: 40,
  },
  even: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  centerFlex: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing.unit * 8,
    height: 200,
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const HomePage = (props) => {
  const { classes } = props;

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="secondary">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <Button onClick={scrollToTop} color="inherit">
              <Typography variant="title" color="inherit">
                Home
              </Typography>
            </Button>
          </div>
          <Link
            style={{ display: 'flex' }}
            activeClass="active"
            to="projects"
            spy
            smooth
            offset={-30}
            duration={500}
          >
            <Button color="inherit">Projects</Button>
          </Link>
          <Link
            style={{ display: 'flex' }}
            activeClass="active"
            to="resume"
            spy
            smooth
            offset={-30}
            duration={500}
          >
            <Button color="inherit">Résumé</Button>
          </Link>
          <Link
            style={{ display: 'flex' }}
            activeClass="active"
            to="about"
            spy
            smooth
            offset={-30}
            duration={500}
          >
            <Button color="inherit">About</Button>
          </Link>
          <Link
            style={{ display: 'flex' }}
            activeClass="active"
            to="publications"
            spy
            smooth
            offset={-30}
            duration={500}
          >
            <Button color="inherit">Publications</Button>
          </Link>
          <Link
            style={{ display: 'flex' }}
            activeClass="active"
            to="publications"
            spy
            smooth
            offset={-30}
            duration={500}
          >
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <div style={{ paddingTop: 120 }} className={classes.odd}>
          <Avatar src="images/ProfilePic.png" className={classes.avatar} />
          <div className={classes.white}>
            <Typography align="center" color="inherit" variant="display3">
              Jesper Hansson Falkenby
            </Typography>
            <Typography align="center" color="inherit" variant="display1" gutterBottom>
              Programmer - Gaming Enthusiast - Tech Freak
            </Typography>
          </div>
        </div>
        <Element name="projects">
          <div className={classes.layout}>
            <Projects data={projectsData} />
          </div>
        </Element>
        <Element name="resume">
          <div className={classes.odd}>
            <div className={classes.layout}>
              <Resume />
            </div>
          </div>
        </Element>
        <Element name="about">
          <div className={classNames(classes.even, classes.layout)}>
            <Typography align="center" variant="display1" gutterBottom>
              About
            </Typography>
            {aboutData.data
              ? aboutData.data.about.map(text => (
                <Typography key={text} variant="subheading" style={{ marginTop: 10 }}>
                  {text}
                </Typography>
              ))
              : null}
          </div>
        </Element>
        <Element name="publications">
          <div className={classes.odd}>
            <div className={classes.layout}>
              <Publications data={publicationsData.data} />
            </div>
          </div>
        </Element>
        <Element name="contact">
          <div className={classes.even}>
            <div className={classes.layout}>
              <Contact />
            </div>
          </div>
        </Element>
      </main>
      <footer className={classes.footer}>
        <div className={classes.columnFlex}>
          <div
            className={classes.rowFlex}
            style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 100 }}
          >
            <IconButton
              href="https://www.facebook.com/jesper.hansson.f"
              className={classes.white}
              aria-label="Facebook"
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/jesperhf92/"
              className={classes.white}
              aria-label="Linkedin"
            >
              <Linkedin />
            </IconButton>
            <IconButton
              href="https://twitter.com/JesperFalkenby"
              className={classes.white}
              aria-label="Twitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/jesperfalkenby/"
              className={classes.white}
              aria-label="Instagram"
            >
              <Instagram />
            </IconButton>
          </div>
          <Typography className={classes.white} variant="subheading" align="center" gutterBottom>
            Copyright © Jesper Hansson Falkenby 2018
          </Typography>
        </div>
      </footer>
    </React.Fragment>
  );
};

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
