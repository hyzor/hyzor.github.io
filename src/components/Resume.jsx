import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import IconButton from '@material-ui/core/IconButton';
import { Trail } from 'react-spring/renderprops';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const styles = theme => ({
  white: {
    color: '#fff',
  },
  title: {
    textAlign: 'center',
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
  centerFlex: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

class Resume extends React.Component {
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Trail
            items={['Rés', 'umé']}
            from={{ opacity: 0, transform: 'translate3d(0,-120px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            delay={500}
          >
            {item => props => (
              <Typography
                className={classes.white}
                align="center"
                color="inherit"
                style={props}
                variant="h2"
                gutterBottom
              >
                {item}
              </Typography>
            )}
          </Trail>
        </div>
        <div className={classes.centerFlex}>
          <Paper className={classes.paper} elevation={16} style={{ position: 'relative' }}>
            <Document
              file="documents/JHF_cv_v2.pdf"
              onLoadSuccess={this.onDocumentLoad}
              options={options}
            >
              <Page pageNumber={pageNumber} scale={1.22} />
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
            <Typography className={classes.title} variant="subtitle1" gutterBottom>
              {pageNumber} / {numPages}
            </Typography>
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles, { withTheme: true })(Resume));
