
<template>
    <div>
        <h2>List of Games</h2><br>
        <!--  add id, pass it in as a prop for vgli.vue -->
        <div class="accordion">
            <VideoGameListItem v-for="game in vgStore.productGameList" 
            :key="game.id" 
            :id="game.id" 
            :name="game.name"
            :price="game.price" 
            :description="game.description" 
            :image="game.image">
            </VideoGameListItem>
        </div>
        <!-- <button class="btn btn-primary" @click="vgStore.anyoneCanUse">Click me</button> -->
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