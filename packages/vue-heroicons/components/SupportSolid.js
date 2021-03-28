import Vue from 'vue'

export default Vue.extend({
  name: 'SupportSolid',
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
    data.domProps.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM16 10C16 10.9926 15.7589 11.929 15.3322 12.7537L13.8076 11.2291C13.9325 10.8419 14 10.4288 14 10C14 9.6714 13.9604 9.35205 13.8856 9.04648L15.4484 7.48368C15.8025 8.24895 16 9.1014 16 10ZM10.8345 13.9128L12.4156 15.4939C11.6765 15.8193 10.8594 16 10 16C9.1014 16 8.24895 15.8025 7.48368 15.4484L9.04648 13.8856C9.35205 13.9604 9.6714 14 10 14C10.2862 14 10.5653 13.9699 10.8345 13.9128ZM6.1581 11.1172C6.05517 10.7626 6 10.3878 6 10C6 9.66814 6.04041 9.34571 6.11659 9.03738L6.0378 9.11617L4.50608 7.58444C4.18066 8.32349 4 9.14065 4 10C4 10.9539 4.2226 11.8558 4.61868 12.6566L6.1581 11.1172ZM7.24631 4.66782C8.07101 4.24105 9.00735 4 10 4C10.9539 4 11.8558 4.2226 12.6566 4.61868L11.1172 6.1581C10.7626 6.05517 10.3878 6 10 6C9.57119 6 9.15814 6.06748 8.77088 6.19239L7.24631 4.66782ZM12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z" fill="#4B5563"/>'
    return createElement('svg', data)
  },
})
