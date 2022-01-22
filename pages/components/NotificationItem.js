import React, { forwardRef } from 'react';
import AchievementNotification from './notifications/AchievementNotification';

// eslint-disable-next-line react/display-name
const SnackMessage = forwardRef((props, ref) => {
  const type = props.message?.split(' ')[0];
  const msg = props.message?.split(' ')?.slice(1).join(' ');

  switch(type) {
    case 'achievement': return <AchievementNotification id={props.id} message={msg} ref={ref} />
    default: 
  }
});

export default SnackMessage;