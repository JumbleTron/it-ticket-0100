interface PaymentGateway {
    pay();
}

class PaymentGateway {
    pay() {
        //
    }
}

class Stripe implements PaymentGateway {
    pay() {
        console.log('pay stripe')
    }
}
class P24 implements PaymentGateway {
    pay() {
        console.log('pay p24')
    }
}

class Order {
    processPayment(gateway: PaymentGateway) {
        gateway.pay()
    }
}

const order = new Order();
order.processPayment(new P24());
