public class Productsearch {
    int productId;
    String productName;
    String category;

    public Productsearch(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return "Product{" +
               "productId=" + productId +
               ", productName='" + productName + '\'' +
               ", category='" + category + '\'' +
               '}';
    }
}
