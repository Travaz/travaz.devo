<script>
export default {
  name: 'Button',
  props: {
    destinationUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <a class="btn" :href="destinationUrl">
    <slot></slot>
  </a>
</template>

<style scoped>
.btn {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  text-decoration: none;

  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;

  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  border-color: var(--vp-button-brand-border);
}

.btn:hover {
  background-color: var(--vp-button-brand-hover-bg);
  color: var(--vp-button-brand-hover-text);
  border-color: var(--vp-button-brand-hover-border);
}
</style>