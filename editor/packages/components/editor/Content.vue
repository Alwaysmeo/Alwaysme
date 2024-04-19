<script setup>
	import '@styles/content.scss'
	import { reactive, watch, onMounted } from 'vue'

	defineExpose({ getContent, setContent, getSelection })
	const emits = defineEmits(['changeContent'])

	const state = reactive({
		contnet: '<p style="color: red;">测试，这是一段文本内容。</p>'
	})

	function getContent() {
		return state.contnet
	}
	function setContent(content) {
		state.contnet = content
	}

	function getSelection() {
		return window.getSelection()
	}

	watch(
		() => state.contnet,
		(newVlaue) => {
			emits('changeContent', newVlaue)
		}
	)

	function aa(params) {
		console.log(params)
	}

	onMounted(() => {})
</script>

<template>
	<div class="conten-container" contenteditable="true" spellcheck="false" v-html="state.contnet" @input="aa"></div>
</template>

<style scoped lang="scss">
	/** */
</style>
