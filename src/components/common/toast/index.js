import Toast from 'components/common/toast/Toast'
const obj = {}

obj.install = function(Vue, options) {

  const toastContrustor = Vue.extend(Toast)

  // const toast = new toastContrustor()
  // toast.$mount(document.createElement('div'))

  const toast = new toastContrustor().$mount()
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj

