import { mitt } from '@utils';
export default defineComponent({
    props: {
        // 对齐方式
        position: {
            type: String,
            default: 'left'
        }
    },
    setup(props, { slots }) {
        nextTick(() => {
            watchEffect(() => {
                mitt.emit('timeline-position', props.position);
            });
        });
        return () => {
            return h('div', { class: `${namespace}-timeline`, style: `--${namespace}-timeline-item-position: ${props.position}` }, slots.default?.());
        };
    }
});