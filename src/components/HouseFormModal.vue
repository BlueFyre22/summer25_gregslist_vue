<script setup>
import HouseForm from './HouseForm.vue';


</script>


<template>

<div class="modal fade" id="houseFormModal" tabindex="-1" aria-labelledby="houseFormModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="houseFormModalLabel">Lets Sell Your House!</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<HouseForm/>
      </div>
    </div>
  </div>
</div>

</template>


<style lang="scss" scoped>

</style>