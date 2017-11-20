import { hideNotification } from  './actions'

describe('Action creators',()=>{
  it('hideNotification', () => {
    const hideNotificationAction = hideNotification()
    expect(hideNotificationAction).toEqual({type:"HIDE_NOTIFICATION"})
  });
});