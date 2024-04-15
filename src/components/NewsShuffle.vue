<template>
  <section>
    <div class="mobile:hidden laptop:grid grid-rows-2 grid-flow-col gap-4">
      <CardElement />
      <CardElement />
      <CardElement
        class="row-span-2"
        imgSize="double"
        cardText="ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების "
      />
      <CardElement />
      <CardElement />
    </div>
    <div
      class="laptop:hidden tablet:grid tablet:grid-cols-2 mobile:flex flex-col gap-4"
    >
      <CardElement
        class="col-span-2"
        imgSize="double"
        cardText="ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების "
      />
      <CardElement />
      <CardElement />
      <CardElement />
      <CardElement />
    </div>
  </section>
</template>

<script setup>
import CardElement from "./cards/ShuffleCard.vue";
</script>
