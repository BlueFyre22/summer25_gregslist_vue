<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap';
import { ref } from 'vue';



async function submitHouse() {
  try {
    await housesService.createHouseListing(editableHouseData.value)
    //this clears the form after submitting
    editableHouseData.value = {
        year: new Date().getFullYear,
    bedrooms: "",
    bathrooms: '',
    imgUrl: "",
    price: 0,
    description: '',
    levels: '',

    }
    Modal.getOrCreateInstance('#houseFormModal').hide()
  }
  catch (error){
    Pop.error(error);
    logger.log("no luck creating your house listing", error)
  }
  
}


const editableHouseData = ref(
  {
    year: new Date().getFullYear,
    bedrooms: "",
    bathrooms: '',
    imgUrl: "",
    price: 0,
    description: '',
    levels: ''
  }
)
</script>


<template>
<form @submit.prevent="submitHouse()">
<div class="form-floating mb-3">
      <input v-model="editableHouseData.year" type="number" class="form-control" id="house-year" placeholder="Year house was built in"
        required :max="new Date().getFullYear()">
      <label for="house-year">Year home was built</label>
    </div>



</form>
</template>


<style lang="scss" scoped>

</style>