import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Game from '../models/GameModel'
import Accessory from '../models/AccessoryModel'

export const useVideoGameStore = defineStore('VideoGameStore', () => {
    const productGameList = ref([
        new Game(
            'item1', 
            'Overwatch', 
            29.99, 
            1, 
            'Multiplayer, First-person Shooter', 
            'Overwatch is a first-person multiplayer shooter, set in a future where a conflict between robots and humanity necessitated the creation of a task force, conveniently called "Overwatch."',
            'https://i5.walmartimages.com/asr/ef508770-a89f-45bf-8c4d-4a9b226e789c.88ac656b3d0bd089b2fb2cb686ed9d66.jpeg'
        ),
        new Game(
            'item2',
            'Nioh 2',
            39.99,
            1,
            'Action role-playing, Adventure',
            'Play as a mysterious half-human, half-supernatural Yokai warrior and master the lethal arts of the samurai. This challenging action role-playing game sequel explores the violent Japan Sengoku-era and the deadly Dark Realm.',
            'https://i5.walmartimages.com/asr/d30f5683-a381-4126-963c-383a4200eb82_2.5fd853a0a0f50bdd9b9f8ee640a6edfd.jpeg'
            
        ),
        new Accessory(
            'item3',
            'PS4 Controller',
            59.99,
            1,
            'Black',
            'Experience the power of gaming at your fingertips. The Sony DualShock 4 Wireless Controller for PlayStation 4 enhances your gaming experience. With revolutionary features and comfort with intuitive, precision controls you can fully experience your favorite video games. The analog sticks and trigger buttons deliver greater response and sensitivity along with a multi touch pad for a more natural gameplay.',
            'https://i5.walmartimages.com/asr/f317ff93-77d6-4bc8-9319-6a2cbd7cac72.bcc5d6636ae0847b590bbbe39fe3f6a3.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF'
        ) 
    ])

    const shoppingCartList = ref([])

    const totalCartCost = computed(() => shoppingCartList.value.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2))

    const totalItemsInCart = computed(() => shoppingCartList.value.reduce((sum, item) => sum + item.qty, 0))


    // loop over list to find the index of the item using their id if it is in the list
    // return number "i" item exists otherwise return null
    function findIndexInList(id) {
        for (var i = 0; i < shoppingCartList.value.length; i++) {
            if (shoppingCartList.value[i].id === id) {
                return i;
            }
        }
        return null;
    }

    // adding item when add item button is clicked
    function addToCartList(id, name, price, qty) {

        // set 
        var itemIndex = findIndexInList(id);

        if (itemIndex != null) {
            shoppingCartList.value[itemIndex].qty++;
        } else {
            shoppingCartList.value.push({
                id: id,
                name: name,
                price: price,
                qty: qty,
            });
        }

        alert(name + " was added to cart");
    }

    function removeFromCart(id) {
        // find the index of where the item id is, then remove the correct item
        var itemIndex = findIndexInList(id);
        shoppingCartList.value.splice(itemIndex, 1);
    }

    return { productGameList, shoppingCartList, addToCartList, removeFromCart, totalCartCost, totalItemsInCart }

})

