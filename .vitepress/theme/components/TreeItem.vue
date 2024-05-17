<template>
    <li class="tree-item">
      <div class="tree-item-content">
        <span v-html="item.name" />
        <Icon v-for="icon in item.icons" :key="icon" :name="icon" v-if="item.icons" />
      </div>
    </li>
  </template>
  
  <script>
  import Icon from './Icon.vue';
    
  export default {
    name: 'TreeItem',
    components: {
      Icon
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .tree-item {
    position: relative;
    margin: 0.5em 0;
  }
  
  .tree-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1em;
    border-left: 1px solid #ccc;
    height: 150%;
  }
  
  .tree-item::after {
    content: "";
    position: absolute;
    top: 1em;
    left: -1em;
    border-top: 1px solid #ccc;
    width: 1em;
  }
  
  .tree-item:last-child::before {
    height: 1em;
  }
  
  .tree-item-content {
    margin-left: 1em;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .tree-item-content span {
    margin-left: 0.5em;
  }
  
  .tree-item-children {
    list-style-type: none;
    padding-left: 1em;
  }
  </style>
  