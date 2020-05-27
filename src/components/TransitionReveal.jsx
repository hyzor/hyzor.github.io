import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Waypoint } from 'react-waypoint';
import { Transition, animated } from 'react-spring/renderprops';

class TransitionReveal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  handleWaypointEnter = () => {
    this.setState({ isVisible: true });
  };

  render() {
    const { children, topOffset, bottomOffset, wrapperHeight, delay } = this.props;
    const { isVisible } = this.state;

    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
        topOffset={topOffset || '33%'}
        bottomOffset={bottomOffset || '33%'}
      >
        <div style={{ height: wrapperHeight || '100%', width: '100%' }}>
          <Transition
            items={isVisible}
            from={{ opacity: 0, transform: 'translate3d(0,200px,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
            trail={delay || 0}
          >
            {(_isVisible) =>
              _isVisible &&
              ((props) => (
                <animated.div style={{ ...props, ...{ height: '100%', width: '100%' } }}>
                  {children}
                </animated.div>
              ))
            }
          </Transition>
        </div>
      </Waypoint>
    );
  }
}

TransitionReveal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  topOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bottomOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  wrapperHeight: PropTypes.number,
  delay: PropTypes.number,
};

export default hot(module)(TransitionReveal);
