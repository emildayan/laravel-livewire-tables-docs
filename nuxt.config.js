import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#ff2d20'
  },
  target: 'static',
  content: {
    liveEdit: false
  },
  router: {
    base: '/laravel-livewire-tables-docs'
  }
})
