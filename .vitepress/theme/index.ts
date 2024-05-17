import DefaultTheme from "vitepress/theme";
import "./custom.css";
import type { Theme } from 'vitepress'
import Experience from "./components/Experience.vue";
import Icon from "./components/Icon.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ProjectCard', ProjectCard)
    app.component('Experience', Experience)
    app.component('Icon', Icon)
  }
} satisfies Theme