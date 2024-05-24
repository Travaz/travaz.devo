<script setup>
import { data as projects } from "../loader/projects.data"
import Icon from './Icon.vue';
</script>
<template>
    <a :href="project.id" class="timeline-project" v-if="project.found">
        <div class="timeline-project-image">
            <img :src="project.image" />
        </div>

        <div class="timeline-project-content">
            <div class="timeline-project-content-title">
                <h2 :id="project.id" tabindex="-1"> {{ project.title }} </h2>
            </div>

            <div class="timeline-project-content-description">
                {{ project.description }}
            </div>

            <div class="timeline-project-content-badges">
                <Icon v-for="icon in project.techs" :key="icon" :name="icon" />
            </div>
        </div>
    </a>
</template>




<script>
export default {
    name: 'TimelineCard',
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        project() {
            console.log(projects)
            const project = projects.find(project => (project.frontmatter.id ?? undefined) === this.id)
            console.log(project)
            return { found: project !== undefined, ...project?.frontmatter }
        },
        headerAnchor() {
            return '#' + this.project.id;
        },
    },
}
</script>

<style>
.timeline-project-content-badges {
    margin-top: 10px;
    text-align: right;
}

.timeline-project:hover {
    border-radius: 20px;
    cursor: pointer;
    color: var(--homepage-contrast-color);
}

.timeline-project:hover {
    border: 5px solid var(--vp-c-text-1);
}

.timeline-project {
    display: grid;
    grid-template-columns: 200px auto;
    
    gap: 1em;
    margin-top: 10px;
    padding: 20px;

    background-color: var(--vp-input-bg-color);
    border-radius: 20px;

    border: 5px solid var(--vp-c-bg);
    text-decoration: none !important;
    color: var(--vp-c-text-1) !important;
    align-items: stretch;
}

.timeline-project-image {
    max-width: 15vw;
    display: flex;
}

.timeline-project-image>img {
    border-radius: 20px;
    margin: auto;
}

.timeline-project-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: var(--vp-c-text-1)
}

.timeline-project-content-title {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 10px;
    color: var(--vp-c-text-1) !important;
    padding-top: 20px;
}

.timeline-project-content-title>h2 {
    margin: 0;
    border: 0;
    padding-top: 0;
}

@media screen and (max-width: 600px) {
    .timeline-project {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .timeline-project-image {
        width: 200px;
    }

    .timeline-project-content {
        width: 100%;
    }

    .timeline-project-content-title {
        font-size: 1.5rem;
        text-align: center;
    }

    .timeline-project-content-title {
        padding-top: 0;
    }
}
</style>