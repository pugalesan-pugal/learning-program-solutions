public class RazorpayAdapter implements PaymentProcessor {
    private RazorpayPayment razorpay;

    public RazorpayAdapter() {
        this.razorpay = new RazorpayPayment();
    }

    @Override
    public void processPayment(double amount) {
        razorpay.doTransaction(amount);
    }
}
