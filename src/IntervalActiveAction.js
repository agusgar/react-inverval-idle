import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IntervalTimer from 'react-interval-timer';
import IdleTimer from 'react-idle-timer';

function IntervalActiveAction({ timeout, idleTime, onTimeout }) {
  const [enabled, setEnabled] = useState(true);

  return (
    <div>
      <IntervalTimer 
        timeout={timeout} 
        callback={onTimeout} 
        repeat 
        enabled={enabled} />
      <IdleTimer
        timeout={idleTime}
        onIdle={() => setEnabled(false)}
        onActive={() => setEnabled(true)}
      />
    </div>
  );
}

IntervalActiveAction.defaultProps = {
  timeout: 1000,
  idleTime: 5000,
}

IntervalActiveAction.propTypes = {
  timeout: PropTypes.number,
  idleTime: PropTypes.number,
  onTimeout: PropTypes.func.isRequired,
};

export default IntervalActiveAction;