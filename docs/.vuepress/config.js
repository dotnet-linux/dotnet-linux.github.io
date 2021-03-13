module.exports = {
  locales: {
    '/en-us/': {
      lang: 'en-US',
      title: '.NET/Linux',
      description: 'Minimal bootable Linux environment for .NET'
    },
    '/zh-hans/': {
      lang: 'zh-hans',
      title: '.NET/Linux',
      description: '为 .NET 设计的最小可启动 Linux 环境'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/assets/icons/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/mstile-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    logo: '/assets/image/logo.png',
    editLinks: true,
    search: false,
    smoothScroll: true,
    lastUpdated: true,
    
    editLinks: true,
    repo: 'dotnet-linux/dotnet-linux.github.io',
    docsDir: 'docs',
    docsBranch: 'main',
 
    locales: {
      '/en-us/': {
        selectText: "Languages",
        label: "English",
        editLinkText: "Edit this page on GitHub",
        serviceWorker: {
          updatePopup: { 
            message: "New content is available.", 
            buttonText: "Refresh" 
          }
        },
        lastUpdated: 'Last Updated',
        nav: [
          { text: "Home", link: '/en-US/'}
        ]
      },
      '/zh-hans/': {
        selectText: "选择语言",
        label: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用。",
            buttonText: "刷新"
          }
        },
        lastUpdated: '最后更新时间',
        nav: [
          { text: "首页", link: '/zh-hans/'}
        ]
      }     
    }
  },
  plugins: [
    ['@vuepress/back-to-top',true],
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
  ],
  
}

