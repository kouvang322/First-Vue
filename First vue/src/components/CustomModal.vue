<template>
    <!-- Modal -->
    <div>
        <div v-if="itemProps.isDescriptionModal" class="modal fade" :id="itemProps.id" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"><strong>{{itemProps.name}}</strong></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{itemProps.description}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="itemProps.isRemoveItemModal" class="modal fade" :id="itemProps.id" data-bs-backdrop="false"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"><strong>Remove Item</strong></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Remove "{{ itemProps.name}}" from the cart?
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-danger" data-bs-dismiss="modal" @click="vgStore.removeFromCart(itemProps.id)">Remove Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useVideoGameStore } from "../stores/VideoGameStore"

const vgStore = useVideoGameStore();

const itemProps = defineProps(
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
        qty: {
            type: Number
        },
        description: {
            type: String
        },
        isDescriptionModal: {
            type: Boolean
        },
        isAddItemModal: {
            type: Boolean
        },
        isRemoveItemModal: {
            type: Boolean
        }
    }
)
</script>

<style scoped>

</style>