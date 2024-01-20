// Посредник
interface IMediator {
    notify(sender: string, event: string): void;
}

abstract class Mediated {
    mediator: IMediator;
    setMediator(mediator: IMediator) {
        this.mediator = mediator;
    }
}

class Notifications {
    send(){
        console.log('Отправляю уведомление');
    }
}

class Logger {
    log(message: string) {
        console.log(message);
    }
}

class EventHandler extends Mediated{
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}

class NotificationMediator implements IMediator {
    constructor(
        public notifications: Notifications,
        public logger: Logger,
        public handler: EventHandler
    ) {}
    notify(sender: string, event: string): void {
        switch(event) {
            case 'myEvent':
                this.notifications.send();
                this.logger.log('Отправлено');
                break;
        }
    }
}

const handler = new EventHandler();
const logger = new Logger();
const notifications = new Notifications();

const m = new NotificationMediator(
    notifications,
    logger,
    handler
);
handler.setMediator(m);
handler.myEvent();

