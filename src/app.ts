import { NotificationSender } from './NotificationSender';
import { EmailService } from './services/email.service';
import { SMSService } from './services/sms.service';

const emailService = new EmailService();
const smsService = new SMSService();
const services = {
    'email': emailService,
    'sms': smsService,
}

const notification = new NotificationSender(services);

notification.sendNotification({
    message: 'Hey there',
    recipient: '+1 (555) 123-4567',
    channel: 'sms',
});
notification.sendNotification({
    message: 'Hi Joe, how are you?',
    recipient: 'joe@gmail.com',
    channel: 'email',
});