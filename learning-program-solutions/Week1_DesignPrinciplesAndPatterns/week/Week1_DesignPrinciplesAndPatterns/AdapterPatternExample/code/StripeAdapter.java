public class StripeAdapter implements PaymentProcessor {
    private StripePayment stripe;

    public StripeAdapter() {
        this.stripe = new StripePayment();
    }

    @Override
    public void processPayment(double amount) {
        stripe.makePayment(amount);
    }
}
