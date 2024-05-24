<script setup>
import { data as projects } from "../loader/projects.data"
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
                <Badge v-for="tag in project.tags" :key="tag">{{ tag }}</Badge>
            </div>
        </div>
    </a>
</template>




<script>
export default {
    name: 'TimelineCard',
    props: {
        projectId: {
            type: String,
            required: true
        }
    },
    computed: {
        project() {
            const project = projects.find(project => project.frontmatter.id ?? undefined === this.projectId)
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
    display: flex;

    flex-direction: row;
    justify-content: space-evenly;
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
}

.timeline-project-image>img {
    border-radius: 20px;
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
    margin-bottom: 20px;
    color: var(--vp-c-text-1) !important;
    padding-top: 20px;
}

.timeline-project-content-title > h2 {
    margin: 0;
    border: 0;
    padding-top: 0;
}

@media screen and (max-width: 600px) {
    .timeline-project {
        flex-direction: column;
        align-items: center;
    }

    .timeline-project-image {
        max-width: 100%;
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