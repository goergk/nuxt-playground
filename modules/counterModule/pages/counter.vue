<template>
  <div>
    <div>Counter Page</div>
    <v-card-item>
      <div class="counter">
        <v-btn icon="$vuetify" @click="decrement">
          -
        </v-btn>
        <div class="counter__value">
          {{ counterStore.getCount }}
        </div>
        <v-btn icon="$vuetify" @click="increment">
          +
        </v-btn>
      </div>
    </v-card-item>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter'
import { useCounterStore } from '~/modules/counterModule/stores/counterStore'

const { increment, decrement } = useCounter()
const test = 'a'
console.log(test)
const counterStore = useCounterStore()
</script>

<style lang="scss" scoped>
@import './counter.scss';
</style>
