<script setup>
	import { reactive } from 'vue'

	const config = reactive({
		toolbar: ['source', 'bold', 'undo', 'redo']
	})

	function add() {
		config.toolbar.push('redo')
	}
	function init(editor) {
		console.log(editor)
	}
</script>

<template>
	<div>
		<alwaysme-editor :config="config" @init="init"></alwaysme-editor>
		<button @click="add">Add</button>
	</div>
</template>

<style scoped lang="scss">
	/** */
</style>
