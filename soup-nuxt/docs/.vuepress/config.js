const path = require('path')
const glob = require('globby')
const cwd = path.join(__dirname, '..')
const { parse } = require('vue-docgen-api')

module.exports = async () => {
  const docFiles = glob.sync('components/**/*.md', { cwd }).map(f => '/' + f)

  const components = await Promise.all(
    glob.sync('../components/**/*.{vue,js,jsx,ts,tsx}', { cwd, absolute: true }).map(async path => {
      return {
        name: (await parse(path)).displayName.replace(/[^a-zA-Z0-9_]/g, ''),
        path
      }
    })
  )

  return {
    base: '/docs/',
    dest: path.join(__dirname, '../../dist/docs'),
    title: 'Soup - NuxtJS - Documentation',
    themeConfig: {
      search: false,
      sidebarDepth: 1,
      sidebar: [
        {
          title: 'Development',
          path: '/development'
        },
        {
          title: 'Configuration',
          path: '/configuration'
        },
        {
          title: 'API',
          path: '/api'
        },
        {
          title: 'Data Models',
          path: '/data-models'
        },
        {
          title: 'Components',
          path: '/components',
          children: docFiles
        },
        {
          title: 'Files',
          path: '/files'
        },
        {
          title: 'Credits',
          path: '/credits'
        }
      ]
    },
    plugins: [
      [
        '@vuepress/register-components',
        {
          components
        }
      ]
    ],
    configureWebpack: {
      output: {
        publicPath: '/docs/'
      },
      resolve: {
        alias: {
          '@': path.join(__dirname, '../../')
        }
      }
    },
    chainWebpack: config => {
      const oneOfsMap = config.module.rule('scss').oneOfs.store
      oneOfsMap.forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            resources: 'assets/scss/_config.scss'
          })
          .end()
      })
    }
  }
}
