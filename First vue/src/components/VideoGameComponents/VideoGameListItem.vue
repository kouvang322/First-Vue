<template>

    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + props.id">
                <strong>{{ props.name }}</strong>
            </button>
        </h2>
        
        <div :id="props.id" class="accordion-collapse collapse" data-bs-parent="#videoGameAccordion">
            <div class="accordion-body">
                <div class="d-flex justify-content-around align-items-center">
                    <img class="imgSize" :src="props.image" /><br>
                    <strong>
                        Price: ${{ props.price }}<br>
                        <br>Description: <br>{{ props.description }}
                    </strong>
                </div>
                <div class="d-flex justify-content-around align-items-center">
                    <br><button type="button" class="btn btn-primary"
                        @click="vgStore.addToCartList(props.name, props.price, props.count)">Add to Cart</button>
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
        count: {
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


