const { description } = require('../package');
const fs = require('fs');
const capitalize = require('capitalize');

const specs = fs.readdirSync('spec')
  .filter(item => /\d\d\-.*/.test(item))
  .map(item => {
    const children = fs.readdirSync(`spec/${item}`)
      .filter(child => child.endsWith('.md'))
      .map(child => `/spec/${item}/${child.substring(0, child.length - 3)}`);

    return {
      title: capitalize.words(item.substring(3).replace(/\-/g, ' ')),
      path: children[0],
      collapsable: true,
      children: children
    }
  });

const usecases = fs.readdirSync('usecase')
  .filter(item => /.*[.]md/.test(item) && item !== 'README.md')
  .map(item => `/usecase/${item}`);

module.exports = {
  title: '.concepts.json',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  patterns: ['spec/**/*.md', 'usecase/**/*.md', '*.md'],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Use Cases',
        link: '/usecase/'
      },
      {
        text: 'Specification',
        link: '/spec/',
      }
    ],
    sidebar: {
      '/spec/': [
        {
          title: 'Specification',
          collapsable: false,
          children: [
            '/spec/',
            ...specs
          ]
        }
      ],
      '/usecase/': [
        {
          title: 'Use Cases',
          collapsable: false,
          children: usecases
        }
      ]
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
};
