import { INotificationSender } from '../interfaces/INotificationSender';

export class EmailService implements INotificationSender {
    send(message: string, recipient: string) {
        console.log(`Sending email to ${recipient}: '${message}'`);
    }
}
