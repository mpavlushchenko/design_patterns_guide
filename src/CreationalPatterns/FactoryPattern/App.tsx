import { FC } from 'react';
import createNotification from './notificationFactory';

const App: FC = () => {
  const handleSendEmail = () => {
    const emailNotification = createNotification('email');
    emailNotification.send('The email has been sent!');
    emailNotification.schedule('The event has been scheduled.', '10:00 AM');
  };

  const handleSendPush = () => {
    const pushNotification = createNotification('push');
    pushNotification.send('The email has been read.');
    pushNotification.schedule('The event is completed.', '12:00 PM');
  };

  return (
    <div>
      <h1>Factory Pattern Example: Notification Service</h1>
      <button onClick={handleSendEmail}>Send Email</button>
      <button onClick={handleSendPush}>Send Push Notification</button>
    </div>
  );
};

export default App;
