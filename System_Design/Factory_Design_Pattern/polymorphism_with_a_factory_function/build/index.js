"use strict";
class EmailNotification {
    send(message) {
        console.log(`Sending EMAIL : ${message}`);
    }
}
class SMSNotification {
    send(message) {
        console.log(`Sending SMS : ${message}`);
    }
}
class PushNotification {
    send(message) {
        console.log(`Sending Push Notification : ${message}`);
    }
}
class ClassNotificationFactory {
    createNotification(type) {
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
let notificationFactory = new ClassNotificationFactory();
const notifier = notificationFactory.createNotification("Email");
notifier.send("Welcome!"); // Sending EMAIL: Welcome!
const smsNotifier = notificationFactory.createNotification("SMS");
smsNotifier.send("Your OTP is 123456"); // Sending SMS: Your OTP is 123456
const pushNotifier = notificationFactory.createNotification("PUSH");
pushNotifier.send("You have interview");
