<template>
    <div>
        <h2>Your Cart</h2><br>

    <div class="list-group">
        <ul v-for="item in vgStore.shoppingCartList" :key="item.name">
            <li>
                {{item.name}}
                {{item.price}}
            </li>
        </ul>
        

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