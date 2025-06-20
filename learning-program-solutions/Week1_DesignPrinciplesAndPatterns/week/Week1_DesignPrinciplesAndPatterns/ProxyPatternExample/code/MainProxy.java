public class MainProxy {
    public static void main(String[] args) {
        Image img1 = new ProxyImage("photo1.jpg");
        Image img2 = new ProxyImage("photo2.jpg");

        System.out.println("\nFirst call (img1):");
        img1.display(); 

        System.out.println("\nSecond call (img1 again):");
        img1.display(); 

        System.out.println("\nFirst call (img2):");
        img2.display(); 
    }
}
