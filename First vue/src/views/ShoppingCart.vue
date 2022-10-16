<template>
    <div>
        <div class="list-group">
            <ul>
                <ShoppingCartItems v-for="item in vgStore.shoppingCartList" 
                :key="item.name"
                :id="item.id"
                :name="item.name"
                :price="item.price"
                :count="item.count"
                ></ShoppingCartItems>
            </ul>
            <div>Total Items: {{ vgStore.shoppingCartList.length }}</div>
            <div>Total Cost: ${{vgStore.totalCartCost}}</div>
            <br><button class="btn btn-primary" @click="clickForAlert">Confirm Purchase</button>

            <!-- maybe add a button to edit quantity, try have item show up only once, but have a count if there are more. Computed -->
        </div>
    </div>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.css"
import { useVideoGameStore } from '../stores/VideoGameStore';
import VideoGameListItem from '../components/VideoGameComponents/VideoGameListItem.vue';
import CustomModal from '../components/CustomModal.vue';
import ShoppingCartItems from '../components/VideoGameComponents/ShoppingCartItems.vue';

const vgStore = useVideoGameStore();

function clickForAlert() {
    alert("purchase complete");
}

</script>

<style scoped>

</style>