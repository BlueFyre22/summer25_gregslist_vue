<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { computed } from 'vue';



const props = defineProps(
  {
    houseProp: {type: House, required: true}
  })

const account = computed(() => AppState.account)



</script>


<template>

<div class="shadow rounded-top house-border">
  <img :src="houseProp.imgUrl || 'https://images.unsplash.com/photo-1672600167490-bdcdf432dc2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2VuZXJpYyUyMGhvdXNlfGVufDB8fDB8fHww'" :alt="`A picture of ${houseProp.creator.name}'s house built in ${houseProp.year}'`" class="img-fluid house-img">
  <div class="bg-light p-3">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <p class="fs-5 mb-0">Built: {{ houseProp.year }} Bedrooms: {{ houseProp.bedrooms }} </p>
      <p class="fs-5 mb-0"> Bathrooms: {{ houseProp.bathrooms }} Floors: {{ houseProp.levels }}</p>
      <button v-if="account?.id == houseProp.creator.id" class="btn btn-outline-danger px-3"><i class="fs-3 mdi mdi-delete"></i></button>
    </div>
    <p class="fs-5">{{ '$' + houseProp.price.toLocaleString() }}</p>
    <hr>
    <p>{{ houseProp.description || "No description added" }}</p>
    <hr>
     <div class="d-flex justify-content-between align-items-center">
        <time :datetime="houseProp.createdAt.toLocaleDateString()">
          {{ houseProp.createdAt.toLocaleDateString() }}
        </time>
        <div>
          <span>{{ houseProp.creator.name }}</span>
          <img :src="houseProp.creator.picture" :alt="houseProp.creator.name" class="ms-2 creator-img">
        </div>
      </div>
  </div>
</div>







</template>


<style lang="scss" scoped>

.house-img{
  width: 100%;
  height: 40dvh;
  object-fit: cover;
}

.house-border {
  border-style: groove;
  border-width: medium;
  border-color: silver;
  overflow-y: hidden;
}

.creator-img{
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%; //this makes it a circle if its a square (h == w)
  object-fit: cover;
}
.btn-outline-danger {
  opacity: 0;
  transition: all 300ms ease;
}
.house-border:hover .btn-outline-danger {
  opacity: 1;
}

</style>