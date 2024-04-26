<script setup>
	import '@styles/content.scss'
	import { ref, reactive, watch, onMounted, computed } from 'vue'

	defineExpose({ getContent, setContent, getSelection })
	const emits = defineEmits(['changeContent'])

	const contentRef = ref()
	const node = reactive([
		{
			key: 1,
			name: 'p',
			value: '测试，这是一段文本内容。',
			attributes: {
				style: { color: 'red' },
				class: []
			},
			children: []
		}
	])

	function getContent() {
		return contnet.value
	}
	function setContent(content) {
		contnet.value = content
	}

	function getSelection() {
		return window.getSelection()
	}

	const contnet = computed(() => {
		node.forEach((item) => {
			let html = `<${item.name} >${item.value}</${item.name}>`
			console.log(html)
		})
		emits('changeContent', 'changeContent')
		return '<p style="color: red;">测试，这是一段文本内容。<span>名字</span></p><p><img src="https://picsum.photos/200/100" /></p>'
	})

	function aa(params) {
		console.log(params)
	}

	onMounted(() => {
		console.log(contentRef.value)
		document.addEventListener('selectionchange', function (event) {
			console.log(this.getSelection().toString())
		})
	})
</script>

<template>
	<div ref="contentRef" class="conten-container" contenteditable="true" spellcheck="false" v-html="contnet" @input="aa"></div>
</template>

<style scoped lang="scss">
	/** */
</style>
