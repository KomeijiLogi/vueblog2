module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'KomeijiLogi',
      description: 'to be an explorer of the code'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'KomeijiLogi/vueblog2',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '博客',
            link: '/blog/',
          },
          {
            text: '项目',
            link: '/project/'
          },
          {
            text: '简介',
            link: '/introduce/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('博客')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'await-async',
        'iconfont'
      ]
    }
  ]
}
