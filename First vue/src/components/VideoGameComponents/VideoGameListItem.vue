<template>
    
        
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#' + props.id">
                        <strong>{{ props.name }}</strong>
                    </button>
                </h2>
                
                <div :id="props.id" class="accordion-collapse collapse show">
                    <div class="accordion-body">
                        <div>
                            <img class="imgSize" :src="props.image" />
                            <strong>
                                {{ props.price }}
                                {{ props.description }}
                            </strong>
                            <button class="btn-primary" @click="vgStore.anyoneCanUse">Click Me</button>
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
    width: 200px;
    height: auto;
}
</style>


