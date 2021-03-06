import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import { withStyles } from '@material-ui/styles';
import { hot } from 'react-hot-loader';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Scrollbars } from 'react-custom-scrollbars';

const styles = () => ({
  img: {
    maxHeight: 640,
    maxWidth: 640,
    overflow: 'auto',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imgDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    height: '100%',
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
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      activePic: 0,
    };
  }

  handleClose = () => {
    const { handleClose } = this.props;
    handleClose();
  };

  handleNext = () => {
    const { project } = this.props;
    const numImages = project.images.length;

    this.setState((prevState) => ({
      activePic: prevState.activePic + 1 < numImages ? prevState.activePic + 1 : 0,
    }));
  };

  handleBack = () => {
    const { project } = this.props;
    const numImages = project.images.length;

    this.setState((prevState) => ({
      activePic: prevState.activePic - 1 >= 0 ? prevState.activePic - 1 : numImages - 1,
    }));
  };

  handleChangePic = (activePic) => {
    this.setState({ activePic });
  };

  handleRef = (ref) => {
    this.ref = ref;
  };

  render() {
    const { project, classes, openProject, theme } = this.props;
    const { activePic } = this.state;

    const numImages = project.images.length;

    return (
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={openProject === project.id}
        onClose={this.handleClose}
        maxWidth="md"
        style={{ minHeight: 768 }}
        scroll="paper"
      >
        <Scrollbars autoHeight autoHeightMax={768}>
          <DialogTitle style={{ textAlign: 'center' }} id="simple-dialog-title">
            {project.name}
          </DialogTitle>
          <div style={{ marginLeft: '10%', marginRight: '10%' }}>
            {project.fulltext
              ? project.fulltext.map((text) => (
                  <Typography key={text} variant="body1" style={{ marginTop: 10 }}>
                    {text}
                  </Typography>
                ))
              : null}
          </div>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activePic}
            onChangeIndex={this.handleChangePic}
            enableMouseEvents
            style={{ marginTop: 16 }}
          >
            {project.images.map((image) => {
              return (
                <div key={image.label} className={classes.imgDiv}>
                  <picture key={image.label}>
                    <source type="image/webp" srcSet={`${image.path}.webp`} />
                    <source type="image/jpeg" srcSet={`${image.path}.${image.extension}`} />
                    <img
                      alt={image.label}
                      className={classes.img}
                      src={`${image.path}.${image.extension}`}
                    />
                  </picture>
                </div>
              );
            })}
          </SwipeableViews>
          <div className={classes.caption}>
            <Typography variant="caption">{project.images[activePic].label}</Typography>
          </div>
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
          {project.source && (
            <Typography
              variant="body2"
              className={classes.title}
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              <a href={project.source}>Source code</a>
            </Typography>
          )}
        </Scrollbars>
      </Dialog>
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
    fulltext: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    source: PropTypes.string,
  }).isRequired,
  openProject: PropTypes.number,
  handleClose: PropTypes.func,
};

export default hot(module)(withStyles(styles, { withTheme: true })(ProjectModal));
