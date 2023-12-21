import { INotificationPayload } from './interfaces/INotificationPayload';
import { INotificationSender } from './interfaces/INotificationSender';

export class NotificationSender {
    private services: { [key: string]: INotificationSender };

    constructor(
        services: { [key: string]: INotificationSender }
    ) {
        this.services = services;
    }

    sendNotification(payload: INotificationPayload): void {
        const service = this.services[payload.channel];

        if (!service) {
            throw new Error(`No notification service was found for channel '${payload.channel}'`);
        }
        service.send(payload.message, payload.recipient);
    }
}