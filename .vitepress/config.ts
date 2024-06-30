import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";

export default defineConfig({
  lang: 'en-US',
  title: "Gianlorenzo Occhipinti",
  description: "Gianlorenzo's portfolio",
  base: '/',
  markdown: {
    config: (md) => {
      //@ts-ignore
      md.use(timeline);
    },
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact me', link: 'mailto:gianlorenzo@occhipinti.dev' },
      { text: 'Projects', link: '/project/' },
    ],

    sidebar: {
      '/experience/': [
        {
          text: 'Experience',
          items: [
            { text: 'Renuo AG', link: '/experience/renuo' },
            { text: 'MangaYo!', link: '/experience/mangayo' },
            { text: 'Arcan', link: '/experience/arcan' },
            { text: 'Dakimba', link: '/experience/dakimba' },
          ]
        }
      ],
      '/project/': [
        {
          text: 'Project',
          items: [
            { text: 'MangaYo!', link: '/project/mangayo' },
            { text: 'SYN', link: '/project/syn' },
            { text: 'Investire in BTP', link: '/project/btp' }
          ]
        }
      ],
      '/education/': [
        {
          text: 'Education',
          items: [
            { text: 'MSc Computer Science - USI', link: '/education/usi' },
            { text: 'MSc Computer Science - unimib', link: '/education/msc-unimib' },
            { text: 'BSc Computer Science - unimib', link: '/education/bsc-unimib' },
            { text: 'Diploma Business Information Systems Expert', link: '/education/diploma' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gianlo98' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/gianlorenzo-o/' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 400" style="enable-background:new 0 0 290 400" xml:space="preserve"><path d="M145 366c108.1 0 111-20.2 111-21.5 0-27.4-9.9-54.9-31-70.9-43.8-33.5-49.3-63.4-50.1-82.2 0-5 0-9.2-.1-12.5h34c4-7.4 6-14.2 6-22.7l-38.5-25.4c13.4-9.7 22.1-25.5 22.1-43.3 0-29.6-23.9-53.5-53.3-53.5S91.7 57.9 91.7 87.5c0 17.8 8.7 33.6 22.1 43.3l-38.5 25.4c0 8.5 2 15.3 6 22.7h34c-.1 3.3-.1 7.5-.1 12.5-.8 18.8-6.3 48.7-50.1 82.2-21 15.9-31 43.5-31 70.9C34 345.8 36.9 366 145 366z"/></svg>'
        },
        link: 'https://www.chess.com/member/gianlo14',
        ariaLabel: 'chess.com profile'
      }
    ],

    footer: {
      message: 'Wanna have a site like this? Check out my <a href="/project/portfolio"> portfolio-project </a>',
      copyright: '<a href="privacy-policy">Privacy Policy</a>',
    }
  },
  head: [['link', { rel: 'icon', type: "image/png", href: '/icon.png' }]]
})
