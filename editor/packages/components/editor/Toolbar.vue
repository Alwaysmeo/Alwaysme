<script setup>
	import '@styles/toolbar.scss'
	import { ref, onMounted } from 'vue'
	import useEditorConfig from '@hooks/useEditorConfig'

	const props = defineProps({
		toolbar: {
			type: Array,
			default: () => []
		}
	})

	onMounted(() => {})
</script>

<template>
	<div class="toolbar-container">
		<div class="toolbar-item" v-for="item in props.toolbar" :key="item">
			<component :is="`${useEditorConfig.toolbar.includes(item) ? 'alwaysme-' : ''}${item}`" />
		</div>
	</div>
</template>
