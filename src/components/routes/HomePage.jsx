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

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  titleWhite: {
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    textAlign: 'center',
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
        </Toolbar>
      </AppBar>
      <main>
        <div style={{ paddingTop: 120 }} className={classes.odd}>
          <Avatar src="images/ProfilePic.png" className={classes.avatar} />
          <div className={classes.titleWhite}>
            <Typography color="inherit" variant="display3">
              Jesper Hansson Falkenby
            </Typography>
            <Typography color="inherit" variant="display1" gutterBottom>
              Programmer - Gaming Enthusiast - Tech Freak
            </Typography>
          </div>
        </div>
        <Element name="projects">
          <Projects data={projectsData} />
        </Element>
        <Element name="resume">
          <div className={classes.odd}>
            <Resume />
          </div>
        </Element>
        <Element name="about">
          <div style={{ marginLeft: 100, marginRight: 100 }} className={classes.even}>
            <Typography className={classes.title} variant="display1" gutterBottom>
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
      </main>
    </React.Fragment>
  );
};

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
