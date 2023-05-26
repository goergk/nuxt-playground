<template>
	<v-card class="mx-auto" max-width="344" variant="outlined">
		<v-card-item>
			<div>
				<div class="text-overline mb-1">OVERLINE</div>
				<div class="text-h6 mb-1">Headline</div>
				<div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
			</div>
		</v-card-item>

		<v-card-actions>
			<v-btn-primary> Button </v-btn-primary>
			<v-btn-secondary> Button </v-btn-secondary>
		</v-card-actions>
		<v-row class="d-flex align-center justify-center">
			<v-col cols="auto">
				<v-btn color="primary"> Primary </v-btn>
			</v-col>
			<v-col cols="auto">
				<v-btn color="secondary"> Secondary </v-btn>
			</v-col>
			<v-col cols="auto">
				<v-btn color="error"> Error </v-btn>
			</v-col>
		</v-row>

		<div class="py-5" />

		<v-row class="d-flex align-center justify-center">
			<v-col cols="4">
				<v-select v-model="selectedTheme" label="Select Theme" :items="myThemes" @update:modelValue="setTheme()" />
			</v-col>
		</v-row>
	</v-card>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
const theme = useTheme()
const myThemes = ['lightTheme', 'darkTheme']
const selectedTheme = ref(myThemes[0])

const setTheme = () => {
	theme.global.name.value = selectedTheme.value
}
</script>

<style lang="scss" scoped></style>
