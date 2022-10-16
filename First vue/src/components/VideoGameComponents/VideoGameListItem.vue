<template>

    <div class="card">
        <div class="card-body">
            <div class="d-flex justify-content-around align-items-center mt-3">
                <img class="imgSize clickable" :src="props.image" data-bs-toggle="modal"
                    :data-bs-target="'#' + props.id">
                <!-- @click="showGameDesc" -->
                ${{ props.price }}
                <br>{{ props.genre }}

            </div>
            <div class="d-flex justify-content-around align-items-center">
                <br><button type="button" class="btn btn-primary"
                    @click="vgStore.addToCartList(props.id, props.name, props.price, props.count)">Add to Cart</button>
            </div><br>
            <!-- Item info modal -->
            <CustomModal 
            :id="props.id"
            :name="props.name"
            :description="props.description"
            :is-description-modal = true
            :is-remove-item-modal = false>
            </CustomModal>
        </div>
    </div>

</template>

<script setup>
import { useVideoGameStore } from '../../stores/VideoGameStore';
import CustomModal from '../CustomModal.vue';

const vgStore = useVideoGameStore();
const props = defineProps(
    {
        id: {
            type: String
        },
        name: {
            type: String
        },
        price: {
            type: Number
        },
        count: {
            type: Number
        },
        genre: {
            type: String
        },
        description: {
            type: String
        },
        image: {
            type: String
        }
    });

</script>

<style scoped>
.imgSize {
    width: 150px;
    height: auto;
}

.clickable:hover {
    cursor: pointer;
}

/* .card-title {
    text-decoration-line: underline;
} */
</style>


