<script setup>
	import { inject } from 'vue'
	import useExecCommand from '@hooks/useExecCommand'

	defineOptions({ name: 'Bold' })
	const emits = defineEmits(['handler'])

	const contentRef = inject('contentRef')

	function handler() {
		emits('handler')
		useExecCommand('bold')
	}
</script>

<template>
	<div @click="handler">
		<i class="iconfont icon-bold"></i>
		<p class="tip">加粗</p>
	</div>
</template>
