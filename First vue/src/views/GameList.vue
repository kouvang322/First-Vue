
<template>
    <div>
        <h2>List of Games</h2><br>
        
            <video-game-list-item v-for="game in vgStore.productGameList" 
            :key="game.id" 
            :id="game.id" 
            :name="game.name"
            :price="game.price" 
            :qty="game.qty" 
            :genre="game.genre" 
            :description="game.description"
            :image="game.image">
            </video-game-list-item>
       
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