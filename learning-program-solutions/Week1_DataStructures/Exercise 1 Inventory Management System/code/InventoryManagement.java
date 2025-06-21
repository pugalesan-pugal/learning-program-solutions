import java.util.ArrayList;

public class InventoryManagement {
    private ArrayList<Product> inventory;
    public InventoryManagement(){
        inventory = new ArrayList<>();  
    }
    public void addProduct(Product product){
        for(Product p: inventory){
            if (p.productId==product.productId){
                System.out.println("Aldready Exsists");
                return;
            }
        }
        inventory.add(product);
        System.out.println("Added Product"+product);

    }

    public void updateProduct(int id, String name, int quantity, int price) {
        for (Product p : inventory) {
            if (p.productId == id) {
                p.productName = name;
                p.quantity = quantity;
                p.price = price;
                System.out.println("Updated: " + p);
                return;
            }
        }
    System.out.println("Not found!");
    }

    public void deleteProduct(int id) {
    for (int i = 0; i < inventory.size(); i++) {
        if (inventory.get(i).productId == id) {
            System.out.println("Deleted: " + inventory.remove(i));
            return;
        }
    }
    System.out.println("Not found!");
    } 

    public void printInventory() {
        for (Product p : inventory) {
            System.out.println(p);
        }
    }   


    public static void main(String[] args) {
    InventoryManagement manager = new InventoryManagement();

    
    manager.addProduct(new Product(101, "Laptop", 10, 75000));
    manager.addProduct(new Product(102, "Monitor", 5, 12000));
    manager.addProduct(new Product(101, "Tablet", 3, 20000));

 
    manager.updateProduct(101, "Laptop Pro", 8, 85000);

    manager.deleteProduct(102);


    manager.printInventory();
}



    







}
