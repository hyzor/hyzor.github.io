import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/styles';
import { hot } from 'react-hot-loader';
import Box from '@material-ui/core/Box';
import EmojiToggle from 'components/EmojiToggle';

const styles = (theme) => ({
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
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(3) * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '21cm',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

class Publications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    const { data } = this.props;
    const numSteps = data.publications.length;

    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1 < numSteps ? prevState.activeStep + 1 : 0,
    }));
  };

  handleBack = () => {
    const { data } = this.props;
    const numSteps = data.publications.length;

    this.setState((prevState) => ({
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
      <>
        <Box display="flex" justifyContent="center">
          <Typography
            style={{ marginRight: 8 }}
            align="center"
            color="textSecondary"
            variant="h2"
            gutterBottom
          >
            Publications
          </Typography>
          <EmojiToggle emoji1="🔬" emoji2="🧪" />
        </Box>
        <Paper elevation={16} className={classes.paper}>
          <SwipeableViews
            style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleChangeStep}
            enableMouseEvents
          >
            {data.publications.map((pub) => (
              <React.Fragment key={pub.title}>
                <Typography variant="h6" align="center">
                  {data.publications[activeStep].title}
                </Typography>
                <div style={{ textAlign: 'center' }}>
                  <Typography variant="caption" style={{ marginTop: 2 }}>
                    {data.publications[activeStep].date}
                  </Typography>
                </div>
                <Typography variant="subtitle1" align="center" style={{ marginTop: 5 }}>
                  {data.publications[activeStep].publisher}
                </Typography>
                <Typography variant="subtitle1" align="center" style={{ marginTop: 2 }}>
                  {data.publications[activeStep].type}
                </Typography>
                {pub.desc.map((desc) => (
                  <Typography key={desc} variant="body1" style={{ marginTop: 10 }}>
                    {desc}
                  </Typography>
                ))}
              </React.Fragment>
            ))}
          </SwipeableViews>
          <Box className={classes.caption} display="flex" flexDirection="column">
            <Typography variant="caption">{data.publications[activeStep].title}</Typography>
            {data.publications[activeStep].url && (
              <Typography variant="caption" style={{ marginTop: 10 }}>
                <a href={data.publications[activeStep].url}>Download from archive</a>
              </Typography>
            )}
          </Box>
          <MobileStepper
            steps={numSteps}
            position="static"
            activeStep={activeStep}
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
        </Paper>
      </>
    );
  }
}

Publications.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  data: PropTypes.shape({
    publications: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default hot(module)(withStyles(styles, { withTheme: true })(Publications));
