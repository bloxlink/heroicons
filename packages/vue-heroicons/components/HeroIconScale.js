import Vue from 'vue'

export default Vue.extend({
  name: 'HeroIconScale',
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
      viewBox: `0 0 24 24`,
      xmlns: 'http://www.w3.org/2000/svg',
      fill: 'none',
      stroke: 'currentColor',
    }
    if (!data.domProps) data.domProps = {}
    data.domProps.innerHTML = '<path d="M3 6L6 7M6 7L3 16C4.77253 17.3334 7.22866 17.3334 9.00119 16M6 7L9.00006 16M6 7L12 5M18 7L21 6M18 7L15 16C16.7725 17.3334 19.2287 17.3334 21.0012 16M18 7L21.0001 16M18 7L12 5M12 3V5M12 21V5M12 21H9M12 21H15" stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    return createElement('svg', data)
  },
})