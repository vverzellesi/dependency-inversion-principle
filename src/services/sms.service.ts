import { INotificationSender } from '../interfaces/INotificationSender';

export class SMSService implements INotificationSender {
    send(message: string, recipient: string) {
        console.log(`Sending SMS to ${recipient}: '${message}'`);
    }
}
