<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <div class="DocHeader" v-if="frontmatter.title">
        <h1 class="DocHeader-title">{{ frontmatter.title }}</h1>
        <img v-if="frontmatter.image" :src="frontmatter.image" alt="" class="DocHeader-image" />
    </div>
</template>

<style scoped>
.DocHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.DocHeader-title {
    margin-bottom: 1rem;
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 700;
}

.DocHeader-image {
    border-radius: 10px;
    width: 100%;
    max-width: 800px;
    height: 400px;
    object-fit: cover;
    margin-bottom: 20px;
}

@media (max-width: 768px) {
    .DocHeader-image {
        height: 200px;
    }
}
</style>
