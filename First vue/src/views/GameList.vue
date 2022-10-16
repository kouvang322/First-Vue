
<template>
    <div>
        <h2>List of Games</h2><br>
        <!-- <div class="accordion" id="videoGameAccordion"> -->
            <VideoGameListItem v-for="game in vgStore.productGameList" 
            :key="game.id" 
            :id="game.id" 
            :name="game.name"
            :price="game.price" 
            :count="game.count" 
            :genre="game.genre" 
            :description="game.description"
            :image="game.image">
            </VideoGameListItem>
        <!-- </div> -->
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