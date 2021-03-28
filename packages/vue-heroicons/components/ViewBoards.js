import Vue from 'vue'

export default Vue.extend({
  name: 'ViewBoards',
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
      viewBox: `0 0 24 24`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      stroke: 'currentColor',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path d="M9 17V7M9 17C9 18.1046 8.10457 19 7 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5H7C8.10457 5 9 5.89543 9 7M9 17C9 18.1046 9.89543 19 11 19H13C14.1046 19 15 18.1046 15 17M9 7C9 5.89543 9.89543 5 11 5H13C14.1046 5 15 5.89543 15 7M15 17V7M15 17C15 18.1046 15.8954 19 17 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H17C15.8954 5 15 5.89543 15 7" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})
