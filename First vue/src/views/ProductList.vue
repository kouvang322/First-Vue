
<template>
    <div>
        <h2>List of Products</h2><br>
            <product-list-item v-for="item in vgStore.productGameList" 
            :key="item.id" 
            :id="item.id" 
            :name="item.name"
            :price="item.price" 
            :qty="item.qty" 
            :genre="item.genre"
            :color="item.color" 
            :description="item.description"
            :image="item.image">
            </product-list-item>
    <!-- <div v-for="item in vgStore.productGameList" :key="item.id">
        <product-list-item :item="item"></product-list-item>
    </div> -->
    </div>
</template>

<script setup>
import { useVideoGameStore } from '../stores/VideoGameStore';
import ProductListItem from "../components/ProductListItem.vue";

// components = {ProductListItem}


const vgStore = useVideoGameStore();
</script>

<style scoped>

</style>