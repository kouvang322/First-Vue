<template>
    <li class="list-group-item">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                {{cartItemProps.name}}
                <br>&nbsp;
            </div>
            <div>
                <br>${{cartItemProps.price}}
                <br>Qty: {{cartItemProps.count}}
                <br><button type="button" class="btn btn-danger" @click="vgStore.removeFromCart(index)">Remove
                    Item</button>

                <button class="btn btn-danger" data-bs-toggle="modal" :data-bs-target="'#' + cartItemProps.id">test</button>
            </div>
        </div>
        <CustomModal 
        :id="cartItemProps.id" 
        :name="cartItemProps.name" 
        :description="cartItemProps.description" 
        :is-remove-item-modal=false
        :is-description-modal=true
        ></CustomModal>
    </li>
</template>

<script setup>
import { useVideoGameStore } from '../../stores/VideoGameStore';


const vgStore = useVideoGameStore();

const cartItemProps = defineProps(
    {
        name: {
            type: String
        },
        price: {
            type: Number
        },
        count:{
            type: Number
        },

    });


</script>

<style scoped>

</style>