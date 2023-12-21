export interface INotificationSender {
    send(message: string, recipient: string): void;
}