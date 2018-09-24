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
import Paper from '@material-ui/core/Paper';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import projectsData from 'data/projects.json';
import Projects from 'components/Projects';
import { hot } from 'react-hot-loader';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
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
  bottomLeft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  bottomRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});

class HomePage extends React.Component {
  state = {
    numPages: null,
    pageNumber: 1,
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  handlePrevious = () => {
    const { numPages, pageNumber } = this.state;
    const newNumber = pageNumber - 1;
    this.setState({ pageNumber: newNumber > 0 ? newNumber : numPages });
  };

  handleNext = () => {
    const { numPages, pageNumber } = this.state;
    const newNumber = pageNumber + 1;
    this.setState({ pageNumber: newNumber <= numPages ? newNumber : 1 });
  };

  render() {
    const { classes } = this.props;
    const { pageNumber, numPages } = this.state;

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
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Résumé</Button>
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
          <Projects data={projectsData} />
          <div className={classes.odd}>
            <Typography className={classes.titleWhite} variant="display1" gutterBottom>
              Résumé
            </Typography>
            <div className={classes.centerFlex}>
              <Paper elevation={8} style={{ position: 'relative' }}>
                <Document
                  file="documents/JHF_cv.pdf"
                  onLoadSuccess={this.onDocumentLoad}
                  options={options}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
                <IconButton
                  style={{ zIndex: 1 }}
                  className={classes.bottomLeft}
                  aria-label="Previous"
                  onClick={this.handlePrevious}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton
                  style={{ zIndex: 1 }}
                  className={classes.bottomRight}
                  aria-label="Next"
                  onClick={this.handleNext}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
                <Typography className={classes.title} variant="subheading" gutterBottom>
                  {pageNumber} / {numPages}
                </Typography>
              </Paper>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(HomePage));
