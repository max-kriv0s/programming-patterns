interface IPrototype<T> {
    clone(): T;
}

class UserHistory implements IPrototype<UserHistory> {
    createdAt: Date;
    constructor(public email: string, public name: string) {
        this.createdAt = new Date();
    }
    
    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}

const user = new UserHistory('a@a.ru', 'Антон');
console.log(user);
const user2 = user.clone();
user2.email = 'b@b.ru';
console.log(user2);
console.log(user);
