import React from 'react';
import PropTypes from 'prop-types';

import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import RootRef from '@material-ui/core/RootRef';

class ScrollLock extends React.Component {
  componentDidMount() {
    clearAllBodyScrollLocks();
    disableBodyScroll(this.ref);
  }

  componentWillUnmount() {
    setTimeout(() => {
      clearAllBodyScrollLocks();
    }, 1000);
  }

  handleRef = ref => {
    this.ref = ref;
  };

  render() {
    const { children } = this.props;
    return (
      <RootRef rootRef={this.handleRef}>
        <div>{children}</div>
      </RootRef>
    );
  }
}

ScrollLock.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ScrollLock;
