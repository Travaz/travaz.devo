<script setup>
import { withBase } from 'vitepress'
</script>
<template>
    <div class="icon-container">
        <img 
            :src="withBase(iconUrl)" 
            :alt="`Icon of ${name}`" 
            class="icon" 
        />
        <span class="tooltip">{{ tooltipText }}</span>
    </div>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true
        }
    },
    computed: {
        iconUrl() {
            return withBase(`/icons/${this.name}.svg`);
        },
        tooltipText() {
            const tooltips = {
                aws: 'Amazon Web Services (AWS)',
                java: 'Java',
                k8s: 'Kubernetes',
                python: 'Python',
                react: 'React',
                gcp: 'Google Cloud Platform (GCP)',
                docker: 'Docker',
                prestashop: 'PrestaShop',
                docker: 'Docker',
                php: 'PHP',
                mariadb: 'MariaDB',
                apache: 'Apache',
                nginx: 'Nginx',
                elasticsearch: 'Elasticsearch',
                redis: 'Redis',
                spring: 'Spring Framework',
                mysql: 'MySQL',
                supabase: 'Supabase',
                centos: 'CentOS',
                plotly: 'Plotly',
                d3: 'D3.js',
                mui: 'Material-UI',
                graphql: 'GraphQL',
                cytoscape: 'Cytoscape.js',
                c: 'C',
                rpi: 'Raspberry Pi',
                proxmox: 'Proxmox VE',
                ubuntu: 'Ubuntu',
                knime: 'KNIME',
                minecraft: 'Minecraft',
                esp8266: 'Espressif - ESP8266',
                android: 'Android',
                lua: 'Lua',
                homekit: 'HomeKit',
            };
            return tooltips[this.name] || this.name;
        }
    }
}
</script>

<style scoped>
.icon-container {
    position: relative;
    display: inline-block;
}

.icon {
    width: 20px;
    height: 20px;
    margin-left: 0.3rem;
    transition: transform 0.3s ease-in-out;
}

.icon:hover {
    transform: scale(1.5);
}

.tooltip {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 12vw;
}

.icon-container:hover .tooltip {
    visibility: visible;
    opacity: 1;
}

@media (max-width: 600px) {
    .tooltip {
        overflow: visible;
        max-width: none;
    }
}
</style>
