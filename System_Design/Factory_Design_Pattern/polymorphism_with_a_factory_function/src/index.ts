// Build a NotificationFactory that creates objects for EmailNotification, SMSNotification, and PushNotification.
// Each type should have a send(message: string) method with different console outputs.
interface INotification {
  send(message: string): void;
}
class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Sending EMAIL : ${message}`);
  }
}
class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`Sending SMS : ${message}`);
  }
}
class PushNotification implements INotification {
  send(message: string): void {
    console.log(`Sending Push Notification : ${message}`);
  }
}

interface NotificationFactory {
  createNotification(type: string): INotification;
}

class ClassNotificationFactory implements NotificationFactory {
  createNotification(type: string): INotification {
    switch (type) {
      case "Email":
        return new EmailNotification();
      case "SMS":
        return new SMSNotification();
      case "PUSH":
        return new PushNotification();
      default:
        throw new Error("Invalid notification type");
    }
  }
}

let notificationFactory: ClassNotificationFactory = new ClassNotificationFactory();
const notifier = notificationFactory.createNotification("Email");
notifier.send("Welcome!"); // Sending EMAIL: Welcome!

const smsNotifier = notificationFactory.createNotification("SMS");
smsNotifier.send("Your OTP is 123456"); // Sending SMS: Your OTP is 123456

const pushNotifier = notificationFactory.createNotification("PUSH")
pushNotifier.send("You have interview")