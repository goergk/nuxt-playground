<template>
	<div class="navigation">
		<NuxtLink to="/" class="navigation__link"> Home </NuxtLink>
		<NuxtLink to="/counter" class="navigation__link"> Counter </NuxtLink>
		<NuxtLink to="/showcase" class="navigation__link"> Showcase </NuxtLink>
		<NuxtLink to="/admin" class="navigation__link"> Admin </NuxtLink>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import './Navigation.scss';
</style>
