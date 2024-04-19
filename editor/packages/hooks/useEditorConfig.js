export default {
	// 语言
	language: 'zhCN',
	// 工具栏列表
	toolbar: ['source', 'bold', 'undo', 'redo'],
	// 字体列表
	fontFamily: [
		{ label: '', value: '微软雅黑, Microsoft YaHei' },
		{ label: '', value: '黑体, SimHei' },
		{ label: '', value: '宋体, SimSun' },
		{ label: '', value: '等线, SimSun' },
		{ label: '', value: '楷体, SimKai' },
		{ label: '', value: '隶书, SimLi' },
		{ label: '', value: 'Arial' },
		{ label: '', value: 'Cascadia Mono' }
	],
	// 字体大小列表
	fontSize: ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'],
	// 行内间距列表
	lineHeight: ['1', '1.5', '1.75', '2', '2.5', '3', '4', '5'],
	// 编辑器初始化完成后是否默认聚焦
	defaultFocus: false,
	// 标签自定义样式
	labelCustomStyle: {
		p: {
			border: '1px solid #ccc'
		}
	},
	// 是否开启字数统计
	wordCount: false,
	// 是否开启字数统计
	wordCountMax: 10000,
	// 字数统计提示信息 {#count}表示已输入字符，{#max}表示最大输入字符
	wordCountMsg: '{#count}/{#max}'
}
