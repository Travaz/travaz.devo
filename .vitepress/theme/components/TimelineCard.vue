<script setup>
import {data as projects} from "../loader/projects.data"
</script>
<template>
    <a :href="project.url" class="timeline-project-v2" v-if="project.found">
        <div class="timeline-project-v2-image">
            <img :src="project.image" />
        </div>

        <div class="timeline-project-v2-content">
            <div class="timeline-project-v2-content-title">
                <h2 :id="project.id" tabindex="-1"> {{ project.title }}
                    <a class="header-anchor" :href='headerAnchor' aria-label="Permalink">​</a>
                </h2>
            </div>

            <div class="timeline-project-v2-content-description">
                {{ project.description }}
            </div>

            <div class="timeline-project-v2-content-badges">
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
            const project = projects.find(project => project.frontmatter.projectId ?? undefined === this.projectId)
            return {found: project !== undefined, ...project.frontmatter}
        },
        headerAnchor() {
            return '#' + this.project.id;
        },
    },
}
</script>

<style>
.timeline-project-v2-content-badges {
    margin-top: 10px;
}

.timeline-project-v2:hover {
    background-color: #f6f6f7;
    border-radius: 20px;
    cursor: pointer;
    color: var(--homepage-contrast-color);
}

.timeline-project-v2:hover {
    border: 5px solid var(--vp-c-text-1);
}

.timeline-project-v2 {
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

.timeline-project-v2>h2 {
    display: none
}

.timeline-project-v2-image {
    max-width: 15vw;
}

.timeline-project-v2-image>img {
    border-radius: 20px;
}

.timeline-project-v2-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: var(--vp-c-text-1)
}

.timeline-project-v2-content-title {
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 20px;
    color: var(--vp-c-text-1) !important;
    padding-top: 20px;
}

.timeline-project-v2-content-title > h2 {
    margin: 0;
    border: 0;
    padding-top: 0;
}

@media screen and (max-width: 600px) {
    .timeline-project-v2 {
        flex-direction: column;
        align-items: center;
    }

    .timeline-project-v2-image {
        max-width: 100%;
    }

    .timeline-project-v2-content {
        width: 100%;
    }
    
    .timeline-project-v2-content-title {
        font-size: 1.5rem;
        text-align: center;
    }

    .timeline-project-v2-content-title {
        padding-top: 0;
    }
}

</style>