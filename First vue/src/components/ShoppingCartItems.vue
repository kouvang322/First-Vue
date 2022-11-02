<template>
    <li class="list-group-item">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                {{cartItemProps.name}}
                <br>&nbsp;
            </div>
            <div>
                <br>${{cartItemProps.price}}
                <br>Qty: {{cartItemProps.qty}}
                <br>
                <button button type="button" class="btn btn-danger" 
                data-bs-toggle="modal" 
                :data-bs-target="'#' + cartItemProps.id"
                >Remove Item</button>

            </div>
        </div>
        <custom-modal
        :id="cartItemProps.id" 
        :name="cartItemProps.name"
        :description="cartItemProps.description" 
        :is-description-modal=false
        :is-remove-item-modal=true
        ></custom-modal>
    </li>
</template>

<script setup>
import { useVideoGameStore } from '../stores/VideoGameStore';
import CustomModal from './CustomModal.vue';


const vgStore = useVideoGameStore();

const cartItemProps = defineProps(
    {
        id:{
            type: String
        },          
        name: {
            type: String
        },
        price: {
            type: Number
        },
        qty:{
            type: Number
        },
    });


</script>

<style scoped>

</style>