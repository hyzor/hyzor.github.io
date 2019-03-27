import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Waypoint } from 'react-waypoint';
import { Transition, animated } from 'react-spring/renderprops';

class TransitionReveal extends React.Component {
  state = {
    isVisible: false,
  };

  handleWaypointEnter = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { children } = this.props;
    const { isVisible } = this.state;

    return (
      <Waypoint onEnter={this.handleWaypointEnter} topOffset={200} bottomOffset={200}>
        <div>
          <Transition
            items={isVisible}
            from={{ opacity: 0, transform: 'translate3d(0,200px,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            trail={0}
          >
            {_isVisible =>
              _isVisible && (props => <animated.div style={props}>{children}</animated.div>)
            }
          </Transition>
        </div>
      </Waypoint>
    );
  }
}

TransitionReveal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default hot(module)(TransitionReveal);
