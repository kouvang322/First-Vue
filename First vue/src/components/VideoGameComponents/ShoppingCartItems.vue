<template>
    <li class="list-group-item">
        <br>{{props.name}}
        <br>Price: ${{props.price}}
        <button type="button" class="btn btn-danger" @click="vgStore.removeFromCart(props.name)">Remove Item</button>
        <div>{{  }}</div>
    </li>
</template>

<script setup>
import { useVideoGameStore } from '../../stores/VideoGameStore';


const vgStore = useVideoGameStore();

const props = defineProps(
    {
        name: {
            type: String
        },
        price: {
            type: Number
        } 
        
});


</script>

<style scoped>

</style>