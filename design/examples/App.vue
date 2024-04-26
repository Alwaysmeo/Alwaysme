<template>
	<div class="">
		<me-button type="primary" long @click="click">按钮</me-button>
	</div>
</template>

<script setup lang="ts">
	import { useTheme } from '../packages/hooks'
	import { ref } from 'vue'

	const { setTheme } = useTheme()

	const click = (e: Event) => {}
</script>

<style scoped lang="scss">
	/** */
</style>
