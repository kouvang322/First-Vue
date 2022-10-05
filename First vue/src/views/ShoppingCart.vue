<template>
    <div>
        <h2>Your Cart</h2><br>

        <div class="list-group">
            <ul v-for="item, index in vgStore.shoppingCartList" :key="item.name">
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                           Item: {{item.name}}
                           <br>&nbsp;
                        </div>
                        <div>
                            <br>Price: ${{item.price}}
                            <br># of item(s) in cart: {{item.count}}
                            <br><button type="button" class="btn btn-danger" @click="vgStore.removeFromCart(index)">Remove
                            Item</button>
                        </div>
                    </div>
                </li>
            </ul>
            <div>Total Items: {{ vgStore.shoppingCartList.length }}</div>
            <div>Total Cost: ${{vgStore.totalCartCost}}</div>
            <br><button class="btn btn-primary">Confirm Purchase</button>

            <!-- maybe add a button to edit quantity, try have item show up only once, but have a count if there are more. Computed -->
        </div>

    </div>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.css"
import { useVideoGameStore } from '../stores/VideoGameStore';
import VideoGameListItem from '../components/VideoGameComponents/VideoGameListItem.vue';


const vgStore = useVideoGameStore();
</script>

<style scoped>

</style>