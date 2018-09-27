import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader';

const styles = theme => ({
  titleWhite: {
    color: '#fff',
  },
  caption: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  mobileStepper: {
    backgroundColor: 'inherit',
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
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '21cm',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

class Publications extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { data } = this.props;
    const numSteps = data.publications.length;

    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1 < numSteps ? prevState.activeStep + 1 : 0,
    }));
  };

  handleBack = () => {
    const { data } = this.props;
    const numSteps = data.publications.length;

    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1 >= 0 ? prevState.activeStep - 1 : numSteps - 1,
    }));
  };

  handleChangeStep = (activeStep) => {
    this.setState({ activeStep });
  };

  render() {
    const { data, classes, theme } = this.props;
    const { activeStep } = this.state;
    const numSteps = data.publications.length;

    return (
      <React.Fragment>
        <Typography className={classes.titleWhite} align="center" variant="display1" gutterBottom>
          Publications
        </Typography>
        <Paper elevation={8} className={classes.paper}>
          <SwipeableViews
            style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleChangeStep}
            enableMouseEvents
          >
            {data.publications.map(pub => (
              <React.Fragment key={pub.title}>
                <Typography variant="title" align="center">
                  {data.publications[activeStep].title}
                </Typography>
                <Typography variant="subheading" align="center" style={{ marginTop: 5 }}>
                  {data.publications[activeStep].publisher}
                </Typography>
                <Typography variant="subheading" align="center" style={{ marginTop: 2 }}>
                  {data.publications[activeStep].type}
                </Typography>
                {pub.desc.map(desc => (
                  <Typography key={desc} variant="body1" style={{ marginTop: 10 }}>
                    {desc}
                  </Typography>
                ))}
              </React.Fragment>
            ))}
          </SwipeableViews>
          <Typography variant="caption" className={classes.caption}>
            {data.publications[activeStep].title}
          </Typography>
          <MobileStepper
            steps={numSteps}
            position="static"
            activeStep={activeStep}
            className={classes.mobileStepper}
            nextButton={(
              <IconButton onClick={this.handleNext}>
                <KeyboardArrowRight />
              </IconButton>
)}
            backButton={(
              <IconButton onClick={this.handleBack}>
                <KeyboardArrowLeft />
              </IconButton>
)}
          />
        </Paper>
      </React.Fragment>
    );
  }
}

Publications.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  data: PropTypes.shape({
    publications: PropTypes.array,
  }).isRequired,
};

export default hot(module)(withStyles(styles, { withTheme: true })(Publications));
