import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import { hot } from 'react-hot-loader';
import * as emailjs from 'emailjs-com';

const styles = theme => ({
  title: {
    textAlign: 'center',
  },
  textField: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '21cm',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  columnFlex: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actions: {
    marginTop: 24,
    display: 'flex',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -13,
    marginLeft: -16,
  },
  wrapper: {
    position: 'relative',
  },
});

class Contact extends React.Component {
  constructor(props) {
    super(props);

    emailjs.init('user_tIqLzLo7yif17N99xgsT5');
  }

  static initialState = {
    name: '',
    email: '',
    message: '',
    sendingMsg: false,
  };

  state = Contact.initialState;

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({ sendingMsg: true });

    emailjs.send('gmail', 'template_BPrxTrft', this.state).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState(Contact.initialState);
      },
      (error) => {
        console.log('FAILED...', error);
        this.setState({ sendingMsg: false });
      }
    );
  };

  render() {
    const { classes } = this.props;
    const { name, email, message, sendingMsg } = this.state;

    return (
      <React.Fragment>
        <Typography className={classes.title} variant="display1" gutterBottom>
          Contact
        </Typography>
        <Paper elevation={8} className={classes.paper}>
          <div className={classes.center} style={{ width: '80%' }}>
            <div className={classes.columnFlex}>
              <TextField
                id="input-name"
                label="Name"
                className={classes.textField}
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <TextField
                id="input-email"
                label="Email"
                className={classes.textField}
                value={email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                id="input-message"
                label="Message"
                className={classes.textField}
                value={message}
                onChange={this.handleChange('message')}
                margin="normal"
                multiline
                rows="6"
              />
            </div>
            <div className={classes.actions}>
              <div className={classes.wrapper}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleClick}
                  disabled={sendingMsg}
                >
                  Send
                  <Icon className={classes.rightIcon}>send</Icon>
                </Button>
                {sendingMsg && <CircularProgress size={32} className={classes.progress} />}
              </div>
            </div>
          </div>
        </Paper>
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(withStyles(styles, { withTheme: true })(Contact));
