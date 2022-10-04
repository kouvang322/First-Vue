import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVideoGameStore = defineStore('VideoGameStore', () => {
    const productGameList = ref([
        {
            id: "item1",
            name: 'Overwatch',
            price: 29.99,
            quantityInStock: 5,
            description: 'Multiplayer-shooter',
            image: 'https://i5.walmartimages.com/asr/ef508770-a89f-45bf-8c4d-4a9b226e789c.88ac656b3d0bd089b2fb2cb686ed9d66.jpeg'
        },

        {
            id: "item2",
            name: 'Nioh 2',
            price: 39.99,
            quantityInStock: 5,
            description: 'Action, Adventure',
            image: 'https://i5.walmartimages.com/asr/d30f5683-a381-4126-963c-383a4200eb82_2.5fd853a0a0f50bdd9b9f8ee640a6edfd.jpeg'
        },

        {
            id: "item3",
            name: 'Gang Beasts',
            price: 5.99,
            quantityInStock: 5,
            description: 'Multiplayer, Party, Fighting',
            image: 'https://i5.walmartimages.com/asr/f5a79e42-13eb-4e63-b8f5-b7fb52664253.9d42c7efa35ea434a73424e4f9e050dc.jpeg'
        }
    ])

    const shoppingCartList = ref([])

    const totalCartCost = computed(() => shoppingCartList.value.reduce((sum, game) => sum + game.price, 0).toFixed(2))


    // find the same objects in an array, count how many there are
    // display object once, but also show how many objects are the same inside the list
    // 

    // const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);


    function addToCartList(name, price) {
        shoppingCartList.value.push({
            name: name,
            price: price,
        });
        
    }

    function removeFromCart(index) {
        shoppingCartList.value.splice(index, 1);
    }


    return { productGameList, shoppingCartList, addToCartList, removeFromCart, totalCartCost}

})




