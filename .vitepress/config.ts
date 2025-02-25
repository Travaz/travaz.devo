import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";
import VitePressSidebar from 'vitepress-sidebar';

export default defineConfig({
  lang: 'en-US',
  title: "Daniel Travaglia",
  description: "Daniel's portfolio",
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
      { text: 'Contact me', link: 'mailto:dani@travaz.dev' },
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
        excludeFiles: ['ehm.md', 'learnai.md', 'shortg.md', 'example.md'],
      },
      // {
      //   documentRootPath: '',
      //   scanStartPath: 'education',
      //   resolvePath: '/education/',
      //   useTitleFromFrontmatter: true,
      //   sortMenusByFrontmatterDate: true,
      //   sortMenusOrderByDescending: true,
      // }
    ]),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Travaz' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/danieltravaglia/' },
      { icon: {
        svg: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 107.3"><title>wishlist</title><path d="M65.58,90.82l10.49,9.91L65.58,90.82Zm-2.52,5.76a3.06,3.06,0,0,1,0,6.12H7.12a7.09,7.09,0,0,1-5-2.1h0a7.1,7.1,0,0,1-2.09-5V7.12a7.06,7.06,0,0,1,2.1-5h0A7.1,7.1,0,0,1,7.12,0H91.63a7.1,7.1,0,0,1,5,2.09l.21.23a7.16,7.16,0,0,1,1.88,4.8V49a3.06,3.06,0,0,1-6.12,0V7.12a1,1,0,0,0-.22-.62l-.08-.08a1,1,0,0,0-.7-.3H7.12a1,1,0,0,0-.7.3h0a1,1,0,0,0-.29.7V95.58a1,1,0,0,0,.3.7h0a1,1,0,0,0,.7.29ZM95.44,67.42c3.54-3.7,6-6.89,11.5-7.52,10.24-1.17,19.65,9.32,14.47,19.64-1.47,2.94-4.47,6.44-7.78,9.87C110,93.18,106,96.87,103.14,99.67l-7.69,7.63-6.36-6.12C81.44,93.82,69,84.54,68.55,73.06c-.28-8,6.07-13.2,13.37-13.11,6.53.09,9.29,3.33,13.52,7.47Zm-71.66,0A3.62,3.62,0,1,1,20.16,71a3.62,3.62,0,0,1,3.62-3.62Zm14.71,7.27a3.15,3.15,0,0,1,0-6.19h11.8a3.15,3.15,0,0,1,0,6.19ZM23.78,46a3.62,3.62,0,1,1-3.62,3.61A3.62,3.62,0,0,1,23.78,46Zm14.71,6.94a3.1,3.1,0,0,1,0-6.11H62.58a3.1,3.1,0,0,1,0,6.11ZM23.78,24.6a3.62,3.62,0,1,1-3.62,3.62,3.62,3.62,0,0,1,3.62-3.62Zm14.71,6.65a2.84,2.84,0,0,1-2.57-3.05,2.85,2.85,0,0,1,2.57-3.06H72.38A2.85,2.85,0,0,1,75,28.2a2.84,2.84,0,0,1-2.57,3.05Z"/></svg>'
      }, link: '/wishlist' },
    ],

    footer: {
      message: 'Wanna have a site like this? Check out my <a href="https://github.com/Travaz/travaz.dev.pub"> portfolio-project </a>',
      copyright: '<a href="privacy-policy">Privacy Policy</a>',
    }
  },
  head: [['link', { rel: 'icon', type: "image/png", href: '/icon.png' }]],
  sitemap: {
    hostname: 'https://travaz.dev'
  }
})
