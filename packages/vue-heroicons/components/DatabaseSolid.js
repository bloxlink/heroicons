import Vue from 'vue'

export default Vue.extend({
  name: 'DatabaseSolid',
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
    data.domProps.innerHTML = '<path d="M3 12V15C3 16.6569 6.13401 18 10 18C13.866 18 17 16.6569 17 15V12C17 13.6569 13.866 15 10 15C6.13401 15 3 13.6569 3 12Z" fill="#374151"/><path d="M3 7V10C3 11.6569 6.13401 13 10 13C13.866 13 17 11.6569 17 10V7C17 8.65685 13.866 10 10 10C6.13401 10 3 8.65685 3 7Z" fill="#374151"/><path d="M17 5C17 6.65685 13.866 8 10 8C6.13401 8 3 6.65685 3 5C3 3.34315 6.13401 2 10 2C13.866 2 17 3.34315 17 5Z" fill="#374151"/>'
    return createElement('svg', data)
  },
})
