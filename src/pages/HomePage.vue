<script setup>


</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-column align-items-center">
          <span class="mdi mdi-home display-1"></span>
          <h1 class="display-1">Gregslist</h1>
          <h2 class="display-2 text-center">
            <span>Vue</span>
          </h2>
          <div class="display-5 d-flex gap-3">
            <RouterLink :to="{ name: 'Car Listings' }">
              <span>Cars</span>
            </RouterLink>
            <span>|</span>
            <!-- NOTE this should link to your houses page -->
            <RouterLink :to="{ name: 'Houses' }">
              <span>Houses</span>
            </RouterLink>

            <span>|</span>
            <!-- NOTE this should link to your jobs page -->
            <span>Jobs</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  width: 40%;
  border-bottom: solid thick black;
}

a {
  text-decoration: none;
  color: var(--bs-text);
}

a:hover {
  text-decoration: underline;
}
</style>
