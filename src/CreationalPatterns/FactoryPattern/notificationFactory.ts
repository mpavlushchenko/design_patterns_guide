interface Notification {
  send: (message: string) => void;
  schedule: (message: string, time: string) => void;
}

const createEmailNotification = (): Notification => ({
  send: (message: string) => {
    console.log(`Email Notification Sent: ${message}`);
  },
  schedule: (message: string, time: string) => {
    console.log(`Email Notification Scheduled at ${time}: ${message}`);
  }
});

const createPushNotification = (): Notification => ({
  send: (message: string) => {
    console.log(`Push Notification Sent: ${message}`);
  },
  schedule: (message: string, time: string) => {
    console.log(`Push Notification Scheduled at ${time}: ${message}`);
  }
});

const notificationCreators: Record<string, () => Notification> = {
  email: createEmailNotification,
  push: createPushNotification
};

const createNotification = (type: 'email' | 'push'): Notification => {
  const creator = notificationCreators[type];
  if (!creator) {
    throw new Error('Invalid notification type');
  }
  return creator();
};

export default createNotification;
