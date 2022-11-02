<!-- <template>
    <div class="card-body">
            <div class="d-flex justify-content-around align-items-center mt-3">
                <img class="imgSize clickable" :src="props.image" data-bs-toggle="modal"
                    :data-bs-target="'#' + props.id + 'info'">

                <p v-if="props.genre">${{ props.price }}<br>
                {{ props.genre }}</p>
                <p v-if="props.color">${{ props.price }}<br>
                Color: {{ props.color }}</p>
                
            </div>
            <div class="d-flex justify-content-around align-items-center">
                <br><button type="button" class="btn btn-primary"
                    @click="(props.id, props.name, props.price, props.qty)">Add to
                    Cart</button>
            </div><br> -->
            <!-- <custom-modal 
            :id="props.id + 'info'" 
            :name="props.name" 
            :description="props.description" 
            :is-description-modal=true
            :is-remove-item-modal=false
            ></custom-modal>
        </div>
</template>

<script>
import Game from '../models/GameModel';

export default{
    name: 'GameCardBody',
    props: {
        item: {type: Game}
    },
}
</script>

<style scoped>

</style> -->