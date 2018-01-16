import App from './pages/App'
import router from './router'

new Vue({
  router,
  el: '#root',
  render: h => h(App),
  renderError (h, err) {
    return h('pre', { style: { color: 'red' }}, err.stack)
  }
})
