import ProductItem from "./ProductItemModel";
class Accessory extends ProductItem {
    color = '';
    
   constructor(id, name, price, qty, color, description, image){
        super(id, name, price, qty, description, image);
        
        this.color = color ?? '';
    }   
}
Accessory.type = 'Accessory';

export default Accessory