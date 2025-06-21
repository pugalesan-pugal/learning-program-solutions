public class PayPalAdapter implements PaymentProcessor {
    private PayPalPayment payPal;

    public PayPalAdapter() {
        this.payPal = new PayPalPayment();
    }

    @Override
    public void processPayment(double amount) {
        payPal.sendMoney(amount);
    }
}
