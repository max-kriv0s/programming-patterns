interface IProrvider {
    sendMessage(message: string): void;
    connect(config: string): void;
    disconnect(): void
}

class TelegramProvider implements IProrvider {
    sendMessage(message: string): void {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('Disconnected TG');
    }
}

class WhatsUpProvider implements IProrvider {
    sendMessage(message: string): void {
        console.log(message);
    }
    connect(config: string): void {
        console.log(config);
    }
    disconnect(): void {
        console.log('Disconnected WU');
    }
}

class NotificationSender {
    constructor(private provider: IProrvider) {}

    send() {
        this.provider.connect('connect');
        this.provider.sendMessage('message');
        this.provider.disconnect();
    }
}

class DelayNotificationSender extends NotificationSender {
    constructor(provider: IProrvider) {
        super(provider);
    }

    sendDelayed() {
    }
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();

const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();
