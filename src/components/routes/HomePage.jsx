import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import projectsData from 'data/projects.json';
import Projects from 'components/Projects';
import Resume from 'components/Resume';
import { hot } from 'react-hot-loader';
import { Link, Element } from 'react-scroll';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
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
  centerFlex: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
});

const HomePage = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="secondary" position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Home
          </Typography>
          <Link
            style={{ display: 'flex' }}
            activeClass="active"
            to="projects"
            spy
            smooth
            offset={50}
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
            offset={50}
            duration={500}
          >
            <Button color="inherit">Résumé</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.odd}>
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
        <div className={classes.odd}>
          <Element name="resume">
            <Resume />
          </Element>
        </div>
      </main>
    </React.Fragment>
  );
};

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
