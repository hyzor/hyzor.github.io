import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Transition } from 'react-spring/renderprops';
import Typography from '@material-ui/core/Typography';
import { hot } from 'react-hot-loader';

class EmojiToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
  }

  toggle = () => this.setState((state) => ({ toggle: !state.toggle }));

  componentDidMount() {
    setInterval(this.toggle, 2000);
  }

  render() {
    const { emoji1, emoji2 } = this.props;
    const { toggle } = this.state;

    return (
      <Box>
        <Transition
          items={toggle}
          from={{ position: 'absolute', opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(doToggle) => (style) =>
            doToggle ? (
              <Typography variant="h2" style={style}>
                <span role="img" aria-label="Folder">
                  {emoji1}
                </span>
              </Typography>
            ) : (
              <Typography variant="h2" style={style}>
                <span role="img" aria-label="Open folder">
                  {emoji2}
                </span>
              </Typography>
            )}
        </Transition>
      </Box>
    );
  }
}

EmojiToggle.propTypes = {
  emoji1: PropTypes.string.isRequired,
  emoji2: PropTypes.string.isRequired,
};

export default hot(module)(EmojiToggle);
