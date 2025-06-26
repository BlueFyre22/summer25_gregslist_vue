<script setup>
import { AppState } from '@/AppState.js';
import HouseListing from '@/components/HouseListing.vue';
import { Account } from '@/models/Account.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const account = computed(() => AppState.account)
const houses = computed(() => AppState.houses)

onMounted(() => {
  getHouses()
})




async function getHouses() {
  try {
    await housesService.getHouses()
  }
  catch (error) {
    Pop.error("no houses found bro!", error)
    logger.log(error)
  }
}



</script>


<template>

<section class="container">
  <div class="row">
    <div class="col-12">
      <div class="d-flex justify-content-center align-items-center">
        <h1> Houses <span class="mdi mdi-home fs-1"></span></h1>
        <!-- v-if="account" says if this is true (meaing they are logged in) then show the button. -->
        <button v-if="account" class="btn btn-outline-dark">List a House for Sale</button>
        <small v-else>Log in so you can list that house!</small>
      </div>
    </div>
  </div>
</section>
<section class="container">
<div class="row">
  <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3">
    <HouseListing :houseProp="house"/>
  </div>
</div>
</section>















</template>


<style lang="scss" scoped></style>