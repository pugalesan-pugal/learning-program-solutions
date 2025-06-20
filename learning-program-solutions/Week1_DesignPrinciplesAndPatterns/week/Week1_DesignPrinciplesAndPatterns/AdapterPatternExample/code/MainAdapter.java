public class MainAdapter {
    public static void main(String[] args) {
        PaymentProcessor paypal = new PayPalAdapter();
        PaymentProcessor stripe = new StripeAdapter();
        PaymentProcessor razorpay = new RazorpayAdapter();

        paypal.processPayment(100.0);
        stripe.processPayment(250.5);
        razorpay.processPayment(50.75);
    }
}
