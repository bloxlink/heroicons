import Vue from 'vue'

export default Vue.extend({
  name: 'PhoneIncomingSolid',
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
    data.domProps.innerHTML = '<path d="M14.4142 7L17.7071 3.70711C18.0976 3.31658 18.0976 2.68342 17.7071 2.29289C17.3166 1.90237 16.6834 1.90237 16.2929 2.29289L13 5.58579V4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V7.99931C11 8.00031 11 8.002 11 8.003C11.0004 8.1375 11.0273 8.26575 11.0759 8.38278C11.1236 8.49805 11.1937 8.6062 11.2864 8.70055C11.2907 8.70494 11.2951 8.70929 11.2995 8.7136C11.3938 8.80626 11.502 8.87643 11.6172 8.92412C11.7351 8.97301 11.8644 9 12 9H16C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7H14.4142Z" fill="#4A5568"/><path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L4.79126 9.10437C5.90756 11.8783 8.12168 14.0924 10.8956 15.2087L11.6697 13.6606C11.866 13.2679 12.2955 13.0492 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
