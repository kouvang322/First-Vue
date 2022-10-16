<template>
    <!-- Modal -->
    <div>
        <div v-if="gameProps.isDescriptionModal" class="modal fade" :id="gameProps.id" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"><strong>{{gameProps.name}}</strong></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        {{gameProps.description}}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


        <div v-if="gameProps.isRemoveItemModal" class="modal fade" :id="gameProps.id" data-bs-backdrop="static"
            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"><strong>{{gameProps.name}}</strong></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        test 123
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const gameProps = defineProps(
    {
        id: {
            type: String
        },
        name: {
            type: String
        },
        description: {
            type: String
        },
        isDescriptionModal: {
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