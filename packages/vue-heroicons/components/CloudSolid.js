import Vue from 'vue'

export default Vue.extend({
  name: 'CloudSolid',
  functional: true,
  props: {
    size: { type: Number, default: 0 },
  },
  render (createElement, context) {
    const data = { ...context.data }
    if (context.props.size) {
      data.attrs.width = context.props.size
      data.attrs.height = context.props.size
    }
    data.attr = {
      ...data.attr,
      viewBox: `0 0 20 20`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'currentColor',
      stroke: 'none',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path d="M5.5 16C3.567 16 2 14.433 2 12.5C2 10.6916 3.37146 9.20358 5.13102 9.01922C5.04553 8.69382 5 8.35223 5 8C5 5.79086 6.79086 4 9 4C10.8788 4 12.4551 5.29538 12.8845 7.04175C13.0857 7.01422 13.2912 7 13.5 7C15.9853 7 18 9.01472 18 11.5C18 13.9853 15.9853 16 13.5 16H5.5Z" fill="#374151"/>'
    return createElement('svg', data)
  },
})
