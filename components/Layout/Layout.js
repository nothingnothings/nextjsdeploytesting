import { Fragment, useContext } from 'react';
import NotificationContext from '../../store/notification-context';

import NavigationBar from '../UI/NavigationBar/NavigationBar';

import Notification from '../UI/Notification/Notification';

const Layout = (props) => {
  const notificationContext = useContext(NotificationContext);

  return (
    <Fragment>
      <NavigationBar />
      <main>{props.children}</main>
      {notificationContext.notification && ( //render condicional (ternary expression)...
        <Notification
          message={notificationContext.notification.message}
          status={notificationContext.notification.status}
          title={notificationContext.notification.title}
          clicked={notificationContext.hideNotification}
        />
      )}
    </Fragment>
  );
};

export default Layout;
