// @flow

import type { HideAction } from '../types';

export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

export const hideNotification = (): HideAction => {
  return {
    type: HIDE_NOTIFICATION
  };
};
