import DefaultTheme from "vitepress/theme";
import "./custom.css";
import type { Theme } from 'vitepress'
import Experience from "./components/Experience.vue";
import Icon from "./components/Icon.vue";
import ProjectCard from "./components/ProjectCard.vue";
import TreeItem from "./components/TreeItem.vue";
import Button from "./components/Button.vue";
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
    app.component('Experience', Experience)
    app.component('Icon', Icon)
    app.component('TreeItem', TreeItem)
    app.component('Button', Button)
  }
} satisfies Theme