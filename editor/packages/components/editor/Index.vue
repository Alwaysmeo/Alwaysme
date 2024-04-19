<script setup>
	import { ref, provide, computed, onMounted } from 'vue'
	import useEditorConfig from '@hooks/useEditorConfig'
	import Toolbar from './Toolbar.vue'
	import Content from './Content.vue'

	defineOptions({ name: 'Editor' })

	const emits = defineEmits(['init'])

	const props = defineProps({
		config: {
			type: Object,
			default: () => useEditorConfig
		}
	})

	const config = computed(() => {
		return { ...useEditorConfig, ...props.config }
	})
	console.log(config.value)

	const toolbarRef = ref(null)
	const contentRef = ref(null)
	provide('contentRef', contentRef)
	provide('toolbarRef', toolbarRef)

	function changeContent(contnet) {
		console.log(contnet)
	}

	onMounted(() => {})
</script>

<template>
	<div>
		<Toolbar ref="toolbarRef" :toolbar="config.toolbar" />
		<div class="editor-container">
			<Content ref="contentRef" @changeContent="changeContent" />
		</div>
	</div>
</template>
