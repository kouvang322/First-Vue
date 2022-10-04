<template>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + props.id">
                <strong>{{ props.name }}</strong>
            </button>
        </h2>
                <!-- find the data-bs-parent, define as a prop -->
        <div :id="props.id" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div>
                    <img class="imgSize" :src="props.image" /><br>
                    <strong>
                        Price {{ props.price }}
                        {{ props.description }}
                    </strong>
                    <br><button type="button" class="btn btn-primary" @click="vgStore.addToCartList(props.name, props.price)">Add to
                        Cart</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useVideoGameStore } from '../../stores/VideoGameStore';

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
</style>


