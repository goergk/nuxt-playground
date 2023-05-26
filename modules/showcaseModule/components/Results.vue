<template>
	<div>Current count: {{ counterStore.getCount }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/modules/counterModule/stores/counterStore'

const counterStore = useCounterStore()
</script>

<style scoped></style>
