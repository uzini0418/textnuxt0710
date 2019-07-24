module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'testnuxt0710lalalala',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project입니당!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    users: [
      { id: 1, name: '바나나', number: 24 },
      { id: 2, name: '사과', number: 30 },
      { id: 3, name: '키위', number: 24 },
      { id: 4, name: '참외', number: 5 },
      { id: 5, name: '오렌지', number: 9 }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffb7db' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

