// import ProductItem from "./ProductItemModel";

// function CartCollection(){
//     this.__proto_ = [];

//     function findIndexInList(id) {
//         for (var i = 0; i < __proto_.value.length; i++) {
//             if (__proto_.value[i].id === id) {
//                 return i;
//             }
//         }
//         return null;
//     }

//     // adding item when add item button is clicked
//     this.addItem = function addToCartList(id, name, price, qty) {

//         // set 
//         var itemIndex = findIndexInList(id);

//         if (itemIndex != null) {
//             this.__proto_.value[itemIndex].qty++;
//         } else {
//             this.__proto_.value.push({
//                 id: id,
//                 name: name,
//                 price: price,
//                 qty: qty,
//             });
//             return this;
//         }

//         alert(name + " was added to cart");
//     }

//     this.removeItem = function removeFromCart(id) {
//         // find the index of where the item id is, then remove the correct item
//         var itemIndex = findIndexInList(id);
//         this.__proto_.value.splice(itemIndex, 1);
//         return this;
//     }
// }
// export default CartCollection