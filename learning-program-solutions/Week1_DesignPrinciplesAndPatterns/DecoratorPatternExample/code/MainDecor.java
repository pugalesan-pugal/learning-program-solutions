public class MainDecor {
    public static void main(String[] args) {

        Notifier emailOnly = new EmailNotifier();
        System.out.println("=== Email Only ===");
        emailOnly.send("Hello User!");

        Notifier emailSMS = new SMSNotifierDecorator(new EmailNotifier());
        System.out.println("\n=== Email + SMS ===");
        emailSMS.send("System update available.");

        Notifier fullNotify = new SlackNotifierDecorator(
                                  new SMSNotifierDecorator(
                                      new EmailNotifier()));
        System.out.println("\n=== Email + SMS + Slack ===");
        fullNotify.send("Critical alert!");
    }
}
