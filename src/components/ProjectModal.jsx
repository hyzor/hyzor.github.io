import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import { withStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  img: {
    height: 360,
    maxWidth: 640,
    overflow: 'hidden',
    width: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});

class ProjectModal extends React.Component {
  state = {
    activePic: 0,
  };

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  handleNext = () => {
    const { project } = this.props;
    const numImages = project.images.length;

    this.setState(prevState => ({
      activePic: prevState.activePic + 1 < numImages ? prevState.activePic + 1 : 0,
    }));
  };

  handleBack = () => {
    const { project } = this.props;
    const numImages = project.images.length;

    this.setState(prevState => ({
      activePic: prevState.activePic - 1 >= 0 ? prevState.activePic - 1 : numImages - 1,
    }));
  };

  handleChangePic = activePic => {
    this.setState({ activePic });
  };

  render() {
    const { project, classes, openProject, theme } = this.props;
    const { activePic } = this.state;

    const numImages = project.images.length;

    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={openProject === project.id}
        onClose={this.handleClose}
      >
        <div
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className={classes.paper}
        >
          <Typography
            className={classes.title}
            style={{ marginBottom: 10 }}
            variant="headline"
            id="modal-title"
          >
            {project.name}
          </Typography>
          {project.fulltext
            ? project.fulltext.map(text => (
                <Typography
                  className={classes.title}
                  key={text}
                  variant="body1"
                  style={{ marginTop: 10 }}
                >
                  {text}
                </Typography>
              ))
            : null}

          {project.source && (
            <Typography variant="body1" className={classes.caption}>
              <a href={project.source}>Source code</a>
            </Typography>
          )}

          <SwipeableViews
            style={{ marginTop: 20 }}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activePic}
            onChangeIndex={this.handleChangePic}
            enableMouseEvents
          >
            {project.images.map(image => (
              <img key={image.label} className={classes.img} src={image.path} alt={image.label} />
            ))}
          </SwipeableViews>
          <Typography variant="body1" className={classes.caption}>
            {project.images[activePic].label}
          </Typography>
          <MobileStepper
            steps={numImages}
            position="static"
            activeStep={activePic}
            className={classes.mobileStepper}
            nextButton={
              <IconButton onClick={this.handleNext}>
                <KeyboardArrowRight />
              </IconButton>
            }
            backButton={
              <IconButton onClick={this.handleBack}>
                <KeyboardArrowLeft />
              </IconButton>
            }
          />
        </div>
      </Modal>
    );
  }
}

ProjectModal.defaultProps = {
  openProject: null,
};

ProjectModal.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    source: PropTypes.string,
  }).isRequired,
  openProject: PropTypes.number,
  handleClose: PropTypes.func,
};

export default hot(module)(withStyles(styles, { withTheme: true })(ProjectModal));
