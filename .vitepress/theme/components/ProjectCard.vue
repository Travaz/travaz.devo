<template>
    <a :href="detailedPage" class="project-card">
        <!-- <div class="project-card"> -->
        <div class="header">
            <span class="date">{{ formattedDate }}</span>
        </div>
        <img :src="imageSrc" :alt="title" class="project-card-icon" />
        <div class="project-card-title">{{ title }}</div>
        <p class="description">{{ description }}</p>
        <div class="tags">
            <Badge v-for="tag in tags" :key="tag">{{ tag }}</Badge>
        </div>
        <!-- </div> -->
    </a>
</template>

<script>
import { formattedDate } from '../utils/date';

export default {
    name: 'ProjectCard',
    props: {
        date: {
            type: String,
            required: true,
        },
        imageSrc: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },
        detailedPage: {
            type: String,
            required: false,
            default: '',
        },
    },
    computed: {
        formattedDate() {
            return formattedDate(this.date);
        }
    }
}
</script>

<style>
p>img {
    border-radius: 20px;
    margin: auto;
}

.project-card {
    display: grid;
    grid-template-rows: 20px 200px 3rem auto 30px;
    gap: 1rem;
    background-color: var(--vp-c-bg-soft);
    padding: 1rem;
    border-radius: 8px;
    margin: 1rem 0;
    max-width: 30%;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    border: 5px solid var(--vp-c-bg-soft);
    text-decoration: none !important;
    color: var(--vp-c-text-1) !important;
}

.project-card:hover {
    border: 5px solid var(--vp-c-text-1);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.date {
    color: var(--vp-c-text-2);
    font-size: 0.875rem;
}

.project-card-icon {
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 10px;
    background-color: var(--proect-card-icon-bg);
}

.project-card-title {
    font-size: 1.75rem;
    margin: auto;
    font-weight: 900;
    text-align: center;
}

.description {
    color: var(--vp-c-text-1);
    font-size: 1rem;
    margin: 0.5rem 0;
}

@media screen and (max-width: 600px) {
    .project-card {
        max-width: 100%;
    }

}
</style>
