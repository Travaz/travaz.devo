<template>
  <a class="cv-experience" :href="detailedPage">
    <div class="cv-title-place-block">
      <b class="job-title">{{ title }}</b>
      <span v-if="company">
        <span class="company-at-separator">@</span>
        <a :href="companyUrl"
          :class="{ 'company': true, 'company-link': companyUrl !== '#', 'company-no-link': companyUrl === '#' }"
          @mouseover="showTooltip" @mouseleave="hideTooltip">
          {{ company }}
          <div class="company-tooltip" v-if="tooltipVisible && companyLogo">
            <img :src="companyLogo" :alt="`Logo of ${company}`" class="large-company-logo" />
            <div class="tooltip-text">Click to visit the website</div>
          </div>
        </a>
      </span>
    </div>
    <div class="icons-container" v-if="hasIcons()">
      <Icon v-for="icon in icons" :key="icon" :name="icon" />
    </div>
    <div class="dates-container">
      <span class="dates">{{ formattedFrom }} - {{ formattedTo }} ({{ duration }})</span>
    </div>
    <div class="tree-container" v-if="tree && tree.length">
      <ul class="tree">
        <tree-item v-for="item in tree" :key="item.id" :item="item"></tree-item>
      </ul>
    </div>
  </a>
</template>

<script>
import Icon from './Icon.vue';
import TreeItem from './TreeItem.vue';
import { formattedDate, formattedDuration } from '../utils/date';

export default {
  name: 'Experience',
  components: {
    Icon,
    TreeItem
  },
  props: {
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: false,
      default: ''
    },
    companyUrl: {
      type: String,
      required: false,
      default: '#'
    },
    companyLogo: {
      type: String,
      required: false
    },
    from: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    icons: {
      type: Array,
      required: false,
      default: () => []
    },
    detailedPage: {
      type: String,
      required: false,
      default: ''
    },
    tree: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      tooltipVisible: false
    };
  },
  computed: {
    formattedFrom() {
      return formattedDate(this.from);
    },
    formattedTo() {
      return this.to.toLowerCase() === 'now' ? 'Present' : formattedDate(this.to);
    },
    duration() {
      return formattedDuration(this.from, this.to)
    },
    largeCompanyLogoUrl() {
      return `/public/icons/${this.companyLogo}.svg`;
    }
  },
  methods: {
    hasIcons() {
      return this.icons.length > 0;
    },
    showTooltip() {
      this.tooltipVisible = true;
    },
    hideTooltip() {
      this.tooltipVisible = false;
    }
  }
};
</script>

<style scoped>
.cv-experience {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem 0;
  flex-wrap: wrap;
  padding: 10px;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.cv-title-place-block {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.job-title {
  font-weight: bold;
}

.company-at-separator {
  margin: 0 0.3rem;
}

.company {
  margin-left: 0;
  position: relative;
}

.company-link {
  color: #ff5722;
}

.company-link:hover {
  color: #ff5722;
  font-weight: 900;
}

.company-no-link {
  text-decoration: none;
  cursor: default;
  color: var(--vp-c-text-2);
}

.company-no-link:hover {
  color: var(--vp-c-text-2);
}

.dates-container {
  display: flex;
  align-items: center;
}

.icons-container {
  display: flex;
  align-items: center;
  min-width: 10em;
  text-align: center;
}

.dates {
  color: var(--vp-c-text-1);
  font-size: 14px;
  text-decoration: none;
}

.cv-experience:hover {
  background-color: #f6f6f7;
  border-radius: 20px;
  cursor: pointer;
  color: var(--homepage-contrast-color);
}

.cv-experience:hover .dates {
  color: var(--homepage-contrast-color);
}

.cv-experience:hover .company-no-link {
  color: var(--homepage-contrast-color);
}

.company-tooltip {
  visibility: visible;
  opacity: 1;
  position: absolute;
  z-index: 10;
  bottom: 150%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--tooltip-bg);
  color:  var(--tooltip-text);
  text-align: center;
  border-radius: 5px;
  padding: 10px;
  white-space: nowrap;
  transition: opacity 0.3s;
  align-items: center;
}

.large-company-logo {
  width: 100px;
  height: auto;
  border-radius: 10px;
  margin: auto;
  background-color: white;
}

.tooltip-text {
  margin-top: 5px;
  font-size: 12px;
}

.tree-container {
  margin-left: 20px;
  width: 100%;
}

.tree {
  list-style-type: none;
  padding-left: 1em;
}

@media (max-width: 600px) {
  .cv-experience {
    flex-direction: column;
    background-color: #f6f6f7;
    padding: 10px;
    border-radius: 20px;
    align-content: center;
  }

  .cv-title-place-block {
    flex-direction: column;
  }

  .dates-container {
    flex-direction: column;
  }

  .icons-container {
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .dates {
    margin-top: 0.5rem;
  }

  .company-tooltip {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
