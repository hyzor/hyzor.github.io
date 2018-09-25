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

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const styles = {
  titleWhite: {
    textAlign: 'center',
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
};

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
      </React.Fragment>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles)(Resume));
