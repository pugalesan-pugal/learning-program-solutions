public class Product{
    int productId;
    String productName;
    int quantity;
    int price;

    public Product(int productId,String productName, int quantity, int price ){
        this.productId=productId;
        this.productName=productName;
        this.quantity=quantity;
        this.price=price;
    }
    public Product(int i, String string, String string2) {
       
    }
    @Override
    public String toString() {
        return "Product{" +
        "productId=" + productId +
        "productName="+productName+
        "quantity=" + quantity +
        "price=" + price +
        '}';
    }    


}