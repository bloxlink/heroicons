import Vue from 'vue'

export default Vue.extend({
  name: 'HashtagSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.24254 3.02985C9.77833 3.1638 10.1041 3.70673 9.97014 4.24253L9.53078 5.99999H12.4692L13.0299 3.75746C13.1638 3.22166 13.7067 2.8959 14.2425 3.02985C14.7783 3.1638 15.1041 3.70673 14.9701 4.24253L14.5308 5.99999H17C17.5523 5.99999 18 6.44771 18 6.99999C18 7.55228 17.5523 7.99999 17 7.99999H14.0308L13.0308 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H12.5308L11.9701 16.2425C11.8362 16.7783 11.2933 17.1041 10.7575 16.9701C10.2217 16.8362 9.89591 16.2933 10.0299 15.7575L10.4692 14H7.53078L6.97014 16.2425C6.83619 16.7783 6.29326 17.1041 5.75746 16.9701C5.22167 16.8362 4.89591 16.2933 5.02986 15.7575L5.46922 14H3C2.44772 14 2 13.5523 2 13C2 12.4477 2.44772 12 3 12H5.96922L6.96922 7.99999H5C4.44772 7.99999 4 7.55228 4 6.99999C4 6.44771 4.44772 5.99999 5 5.99999H7.46922L8.02986 3.75746C8.16381 3.22166 8.70674 2.8959 9.24254 3.02985ZM9.03078 7.99999L8.03078 12H10.9692L11.9692 7.99999H9.03078Z" fill="#4A5568"/>'
    return createElement('svg', data)
  },
})
