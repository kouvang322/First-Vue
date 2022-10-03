<template>
    <div>
        <!-- {{ props.name }} -->

        <!-- <img class="imgSize" :src="props.image"  /><br> -->
        <!-- {{ props.price }}

        {{ props.description }} -->

        <div class="accordion" :id="props.id">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true">
                        <strong>{{ props.name }}</strong>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show"
                    data-bs-parent="#accordionGameList">
                    <div class="accordion-body">
                        <div>
                            <img class="imgSize" :src="props.image" />
                            <strong>
                                {{ props.price }}
                                {{ props.description }}
                            </strong>
                            <!-- <button class="btn-primary" @click="vgStore.anyoneCanUse">Click Me</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>

</template>

<script setup>
import { useVideoGameStore } from '../../stores/VideoGameStore';
import { ref } from 'vue';

const vgStore = useVideoGameStore();
const props = defineProps(
    {
        id:{
            type: Number
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
    
const gameIdRef = ref('#' + props.id);

// function gameId(){
//     return{
//         uid: "No.-" + Math.floor(Math.random() * 10e16),
//     }
// }

</script>

<style scoped>
.imgSize {
    width: 200px;
    height: auto;
}
</style>