<template>
    <div>
        <div class="list-group">
            <ul>
                <shopping-cart-items v-for="item in vgStore.shoppingCartList" 
                :key="item.name"
                :id="item.id"
                :name="item.name"
                :price="item.price"
                :qty="item.qty"
                ></shopping-cart-items>
            </ul>
            <div>Items: {{ vgStore.totalItemsInCart }}</div>
            <div>Total: ${{vgStore.totalCartCost}}</div>
            <br><button class="btn btn-primary" @click="clickForAlert">Confirm Purchase</button>

        </div>
    </div>
</template>

<script setup>
import { useVideoGameStore } from '../stores/VideoGameStore';
import CustomModal from '../components/CustomModal.vue';
import ShoppingCartItems from '../components/ShoppingCartItems.vue';

const vgStore = useVideoGameStore();

function clickForAlert() {
    alert("Purchase Complete");
}

</script>

<style scoped>

</style>