<template>
    <div>
        <h2>Your Cart</h2><br>

    <div class="list-group">
        <ul v-for="item, index in vgStore.shoppingCartList" :key="item.name">
            <li class="list-group-item">
                <br>{{item.name}}
                <br>Price: {{item.price}}
                <button type="button" class="btn btn-danger" @click="vgStore.removeFromCart(index)">Remove Item</button>
            </li>
        </ul>
        <div> Total Items: {{ vgStore.shoppingCartList.length }}</div>
        <div v-for="item, index in vgStore.shoppingCartList" :key="item.price"> 
            Total Cost: {{ item.price }}
        </div>
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