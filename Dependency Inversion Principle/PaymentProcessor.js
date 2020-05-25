class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

}

class StripePaymentProcessor {

    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100);
    }
}

class PaypalPaymentProcessor {

    constructor(user) {
        this.user = user;
        this.paypal = new PayPal();
    }

    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of ${amountInCents / 100} with Stripe`);
    }
}

class PayPal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars / 100} with Paypal`)
    }
}

const store = new Store(new PaypalPaymentProcessor('Prathamesh'));
store.purchaseBike(100);
store.purchaseHelmet(200)