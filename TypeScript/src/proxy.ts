interface IPaymentAPI {
    getPaymantDetail(id: number) : IPaymentDetail | undefined
}

interface IPaymentDetail {
    id: number;
    sum: number;
}

class PaymentAPI implements IPaymentAPI {
    private data = [{ id: 1, sum: 10000 }];
    getPaymantDetail(id: number): IPaymentDetail | undefined {
        return this.data.find(d => d.id === id);
    }
}

class PaymentAccessProxy implements IPaymentAPI {
    constructor(private api:IPaymentAPI, private userId: number) {}
    
    getPaymantDetail(id: number): IPaymentDetail | undefined {
        if (this.userId === 1) {
            return this.api.getPaymantDetail(id);
        }
        console.log('Попытка получения данных платежа!');
        return undefined;
    }
}

const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymantDetail(1));

const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymantDetail(1));