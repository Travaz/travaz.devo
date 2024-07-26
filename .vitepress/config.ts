import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";
import VitePressSidebar from 'vitepress-sidebar';

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

    sidebar: VitePressSidebar.generateSidebar([
      {
        documentRootPath: '',
        scanStartPath: 'project',
        resolvePath: '/project/',
        useTitleFromFrontmatter: true,
        sortMenusByFrontmatterDate: true,
        sortMenusOrderByDescending: true,
        excludeFiles: ['ehm.md', 'learnai.md', 'shortg.md', 'example.md', 'visual-analytics.md'],
      },
      {
        documentRootPath: '',
        scanStartPath: 'education',
        resolvePath: '/education/',
        useTitleFromFrontmatter: true,
        sortMenusByFrontmatterDate: true,
        sortMenusOrderByDescending: true,
      }
    ]),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gianlo98' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/gianlorenzo-o/' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 400" style="enable-background:new 0 0 290 400" xml:space="preserve"><path d="M145 366c108.1 0 111-20.2 111-21.5 0-27.4-9.9-54.9-31-70.9-43.8-33.5-49.3-63.4-50.1-82.2 0-5 0-9.2-.1-12.5h34c4-7.4 6-14.2 6-22.7l-38.5-25.4c13.4-9.7 22.1-25.5 22.1-43.3 0-29.6-23.9-53.5-53.3-53.5S91.7 57.9 91.7 87.5c0 17.8 8.7 33.6 22.1 43.3l-38.5 25.4c0 8.5 2 15.3 6 22.7h34c-.1 3.3-.1 7.5-.1 12.5-.8 18.8-6.3 48.7-50.1 82.2-21 15.9-31 43.5-31 70.9C34 345.8 36.9 366 145 366z"/></svg>'
        },
        link: 'https://www.chess.com/member/gianlo14',
        ariaLabel: 'chess.com profile'
      },
      { icon: {
        svg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.3"><title>wishlist</title><path d="M65.58,90.82l10.49,9.91L65.58,90.82Zm-2.52,5.76a3.06,3.06,0,0,1,0,6.12H7.12a7.09,7.09,0,0,1-5-2.1h0a7.1,7.1,0,0,1-2.09-5V7.12a7.06,7.06,0,0,1,2.1-5h0A7.1,7.1,0,0,1,7.12,0H91.63a7.1,7.1,0,0,1,5,2.09l.21.23a7.16,7.16,0,0,1,1.88,4.8V49a3.06,3.06,0,0,1-6.12,0V7.12a1,1,0,0,0-.22-.62l-.08-.08a1,1,0,0,0-.7-.3H7.12a1,1,0,0,0-.7.3h0a1,1,0,0,0-.29.7V95.58a1,1,0,0,0,.3.7h0a1,1,0,0,0,.7.29ZM95.44,67.42c3.54-3.7,6-6.89,11.5-7.52,10.24-1.17,19.65,9.32,14.47,19.64-1.47,2.94-4.47,6.44-7.78,9.87C110,93.18,106,96.87,103.14,99.67l-7.69,7.63-6.36-6.12C81.44,93.82,69,84.54,68.55,73.06c-.28-8,6.07-13.2,13.37-13.11,6.53.09,9.29,3.33,13.52,7.47Zm-71.66,0A3.62,3.62,0,1,1,20.16,71a3.62,3.62,0,0,1,3.62-3.62Zm14.71,7.27a3.15,3.15,0,0,1,0-6.19h11.8a3.15,3.15,0,0,1,0,6.19ZM23.78,46a3.62,3.62,0,1,1-3.62,3.61A3.62,3.62,0,0,1,23.78,46Zm14.71,6.94a3.1,3.1,0,0,1,0-6.11H62.58a3.1,3.1,0,0,1,0,6.11ZM23.78,24.6a3.62,3.62,0,1,1-3.62,3.62,3.62,3.62,0,0,1,3.62-3.62Zm14.71,6.65a2.84,2.84,0,0,1-2.57-3.05,2.85,2.85,0,0,1,2.57-3.06H72.38A2.85,2.85,0,0,1,75,28.2a2.84,2.84,0,0,1-2.57,3.05Z"/></svg>'
      }, link: 'wishlist' },
    ],

    footer: {
      message: 'Wanna have a site like this? Check out my <a href="https://github.com/Gianlo98/press-portfolio"> portfolio-project </a>',
      copyright: '<a href="privacy-policy">Privacy Policy</a>',
    }
  },
  head: [['link', { rel: 'icon', type: "image/png", href: '/icon.png' }]],
  sitemap: {
    hostname: 'https://occhipinti.dev'
  }
})
