import ProductItem from "./ProductItemModel";
class Game extends ProductItem {
    genre = '';
    
   constructor(id, name, price, qty, genre, description, image){
        super(id, name, price, qty, description, image);
        
        this.genre = genre ?? '';
    }   
}
Game.type = 'Game';

export default Game