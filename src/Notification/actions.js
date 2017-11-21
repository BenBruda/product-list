// @flow

import type { HideNotificationAction } from '../types';

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const hideNotification = (): HideNotificationAction => {
  return {
    type: HIDE_NOTIFICATION
  };
};
