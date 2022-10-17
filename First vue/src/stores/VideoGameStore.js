import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useVideoGameStore = defineStore('VideoGameStore', () => {
    const productGameList = ref([
        {
            id: "item1",
            name: 'Overwatch',
            price: 29.99,
            qty: 1,
            genre: 'Multiplayer, First-person Shooter',
            description: 'Overwatch is a first-person multiplayer shooter, set in a future where a conflict between robots and humanity necessitated the creation of a task force, conveniently called "Overwatch."',
            image: 'https://i5.walmartimages.com/asr/ef508770-a89f-45bf-8c4d-4a9b226e789c.88ac656b3d0bd089b2fb2cb686ed9d66.jpeg'
        },

        {
            id: "item2",
            name: 'Nioh 2',
            price: 39.99,
            qty: 1,
            genre: 'Action role-playing, Adventure',
            description: 'Play as a mysterious half-human, half-supernatural Yokai warrior and master the lethal arts of the samurai. This challenging action role-playing game sequel explores the violent Japan Sengoku-era and the deadly Dark Realm.',
            image: 'https://i5.walmartimages.com/asr/d30f5683-a381-4126-963c-383a4200eb82_2.5fd853a0a0f50bdd9b9f8ee640a6edfd.jpeg'
        },

        {
            id: "item3",
            name: 'Gang Beasts',
            price: 5.99,
            qty: 1,
            genre: 'Multiplayer, Party, Fighting, Action',
            description: 'Gang Beasts is a silly multiplayer party game with surly gelatinous characters, brutal slapstick fight sequences, and absurd hazardous environments, set in the mean streets of Beef City.',
            image: 'https://i5.walmartimages.com/asr/f5a79e42-13eb-4e63-b8f5-b7fb52664253.9d42c7efa35ea434a73424e4f9e050dc.jpeg'
        }
    ])

    const shoppingCartList = ref([])

    const totalCartCost = computed(() => shoppingCartList.value.reduce((sum, game) => sum + (game.price * game.qty), 0).toFixed(2))

    const totalItemsInCart = computed(() => shoppingCartList.value.reduce((sum, game) => sum + game.qty, 0))


    // loop over list to find the index of the item if it is in the list
    // return number "i" item exists otherwise return null
    function findIndexInList(id){
        for(var i = 0; i < shoppingCartList.value.length; i++){
            if (shoppingCartList.value[i].id === id){
                return i;
            }
        }
        return null;
    }

    // adding item when add item button is clicked
    function addToCartList(id,name, price, qty) {
        
        // set 
        var itemIndex = findIndexInList(id);
        
        if(itemIndex != null){
            shoppingCartList.value[itemIndex].qty++
        }else{
            shoppingCartList.value.push({
                id: id,
                name: name,
                price: price,
                qty: qty,
            });  
        }

        alert(name + " was added to cart");
    }




    function removeFromCart(index) {
        shoppingCartList.value.splice(index, 1);
    }

    return { productGameList, shoppingCartList, addToCartList, removeFromCart, totalCartCost, totalItemsInCart}

})

