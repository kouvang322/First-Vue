<template>
    <div>
        <!-- <img class="imgSize" :src="props.image"  /><br> -->
        {{ props.name }}

        <!-- {{ props.price }}

        {{ props.description }} -->

        <button @click="vgStore.anyoneCanUse">Click Me</button>
    </div>

</template>

<script setup>
import { useVideoGameStore } from '../../stores/VideoGameStore';

const vgStore = useVideoGameStore();
const props = defineProps(
    {
        name: {
            type: String
        },
        price:{
            type: Number
        },
        description:{
            type: String
        },
        image:{
            type: String
        }
    })

</script>

<style scoped>
    .imgSize{
        width: 250px;
        height: auto;
    }
</style>