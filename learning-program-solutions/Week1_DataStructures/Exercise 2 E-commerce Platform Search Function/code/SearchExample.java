import java.util.Arrays;
import java.util.Comparator;

public class SearchExample {
    public static Productsearch linearSearch(Productsearch[] products, String target) {
        for (Productsearch p : products) {
            if (p != null && p.productName != null && p.productName.equalsIgnoreCase(target)) {
                return p;
            }
        }
        return null;
    }
    public static Productsearch binarySearch(Productsearch[] products, String targetName) {
        int low = 0;
        int high = products.length - 1;
        while (low <= high) {
            int mid = (low + high) / 2;
            if (products[mid] == null || products[mid].productName == null) {
                return null; 
            }
            int comparison = products[mid].productName.compareToIgnoreCase(targetName);
            if (comparison == 0) {
                return products[mid];
            } else if (comparison < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Productsearch[] products = {
            new Productsearch(1, "Laptop", "Electronics"),
            new Productsearch(2, "Shoes", "Footwear"),
            new Productsearch(3, "Phone", "Electronics"),
            new Productsearch(4, "Watch", "Accessories")
        };

        System.out.println("Product List:");
        for (Productsearch p : products) {
            System.out.println(p);
        }

        System.out.println("\nLinear Search:");
        Productsearch found1 = linearSearch(products, "Phone");
        System.out.println(found1 != null ? found1 : "Not Found");

        Arrays.sort(products, Comparator.comparing(
            p -> p.productName != null ? p.productName.toLowerCase() : ""
        ));

        System.out.println("\nBinary Search:");
        Productsearch found2 = binarySearch(products, "Phone");
        System.out.println(found2 != null ? found2 : "Not Found");
    }
}
