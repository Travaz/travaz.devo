<template>
  <a class="cv-experience" :href="detailedPage">
    <div class="cv-title-place-block">
      <b class="job-title">{{ title }}</b>
      <span v-if="company">
        <span class="company-at-separator">@</span>
        <a :href="companyUrl"
          :class="{ 'company': true, 'company-link': companyUrl !== '#', 'company-no-link': companyUrl === '#' }">{{
          company }}</a>
      </span>
    </div>
    <div class="icons-container" v-if="hasIcons()">
      <Icon v-for="icon in icons" :key="icon" :name="icon" />
    </div>
    <div class="dates-container">
      <span class="dates">{{ formattedFrom }} - {{ formattedTo }} ({{ duration }})</span>
    </div>
  </a>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'Experience',
  components: {
    Icon
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
    }
  },
  computed: {
    formattedFrom() {
      return this.formatDate(this.from);
    },
    formattedTo() {
      return this.to.toLowerCase() === 'now' ? 'Present' : this.formatDate(this.to);
    },
    duration() {
      const start = this.parseDate(this.from);
      const end = this.to.toLowerCase() === 'now' ? new Date() : this.parseDate(this.to);

      // Add 1 day to the end date to include the end date in the calculation
      start.setDate(1);
      end.setDate(2);

      const diff = new Date(end - start);
      const years = diff.getUTCFullYear() - 1970;
      const months = diff.getUTCMonth();

      return `${years} ${years > 1 ? 'yrs' : 'yr'} ${months} ${months > 1 ? 'mos' : 'mo'}`;
    }
  },
  methods: {
    formatDate(dateStr) {
      const [month, year] = dateStr.split('-');
      const date = new Date(year, month - 1);
      return date.toLocaleString('default', { month: 'short', year: '2-digit' });
    },
    parseDate(dateStr) {
      const [month, year] = dateStr.split('-');
      return new Date(year, month - 1);
    },
    hasIcons() {
      return this.icons.length > 0;
    }
  }
}
</script>

<style scoped>
.cv-experience {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  flex-wrap: wrap;
  padding: 5px 10px;
  text-decoration: none;
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
  color: #292c32;
  font-size: 14px;
  text-decoration: none;
}

.cv-experience:hover {
  background-color: #f6f6f7;
  border-radius: 20px;
  cursor: pointer;
  color: #292c32;
}

@media (max-width: 600px) {
  .cv-experience {
    flex-direction: column;

    background-color: #f6f6f7;
    padding: 10px;
    border-radius: 20px;
  }

  .cv-title-place-block {
    flex-direction: column;
  }

  .dates-container {
    flex-direction: column;
  }

  .icons {
    margin-left: 0;
    margin-top: 0.5rem;
  }

  .dates {
    margin-top: 0.5rem;
  }
}
</style>
