import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconChevronDoubleRightSolid',
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
    data.attrs = {
      ...data.attrs,
      viewBox: `0 0 20 20`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'currentColor',
      stroke: 'none',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 15.7071C9.90237 15.3166 9.90237 14.6834 10.2929 14.2929L14.5858 10L10.2929 5.70711C9.90237 5.31658 9.90237 4.68342 10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289L16.7071 9.29289C17.0976 9.68342 17.0976 10.3166 16.7071 10.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071Z" fill="#374151"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10.7071 9.29289C11.0976 9.68342 11.0976 10.3166 10.7071 10.7071L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071Z" fill="#374151"/>'
    return createElement('svg', data)
  },
})