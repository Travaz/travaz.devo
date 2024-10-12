<template>
    <div v-if="!isPermanentlyHidden" class="podcast-player" :class="playClassName">
        <canvas ref="confettiCanvas" class="podcast-player__confetti"></canvas>
        <div v-if="isMinimized" @click="toggleMinimize" class="podcast-player__minimized">
            <span class="podcast-player__highlight">No time to read? Click here to listen to my portfolio!</span>
        </div>
        <div v-if="!isMinimized" class="podcast-player__expanded">
            <div @click="handleHide" class="podcast-player__hide-btn">
                <span>Hide 👻</span>
            </div>
        </div>
        <audio ref="audioRef" :src="currentSongInfo.file" :class="{ hidden: isMinimized }" controls preload="auto" />
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted, nextTick, onBeforeUnmount } from 'vue'
import confetti from 'canvas-confetti'
import type { Ref } from 'vue'

enum PlayStatus {
    play,
    pause,
    stop,
}

const playInfo = ref({
    status: PlayStatus.stop,
    currentIndex: 0,
})

const isMinimized = ref(true)
const hasTriggeredConfetti = ref(false)
const isPermanentlyHidden = ref(false)

const audioList = computed(() => [{
    file: '/audio/audio.wav',
}])

const isPlay = computed(() => playInfo.value.status === PlayStatus.play)
const playClassName = computed(() => ({
    'is-minimized': isMinimized.value,
}))

const currentSongInfo = computed(() => audioList.value[playInfo.value.currentIndex])

const audioRef: Ref<HTMLAudioElement | null> = ref(null)
const confettiCanvas: Ref<HTMLCanvasElement | null> = ref(null)

const isMobile = computed(() => window.innerWidth <= 600)

const toggleMinimize = () => {
    isMinimized.value = !isMinimized.value
    if (!isMinimized.value && !hasTriggeredConfetti.value) {
        triggerConfetti()
        hasTriggeredConfetti.value = true
    }
    if (!isPlay.value) {
        playAudio()
    }
}

const playAudio = () => {
    if (audioRef.value) {
        playInfo.value.status = PlayStatus.play
        audioRef.value.play()
    }
}

const triggerConfetti = () => {
    if (confettiCanvas.value) {
        const confettiSettings = { particleCount: 100, spread: 70, origin: { x: 0.5, y: 1 }, startVelocity: 30 }
        const canvas = confetti.create(confettiCanvas.value, { resize: true })
        canvas(confettiSettings)
    }
}

const handleHide = () => {
    try {
        if (isMobile.value) {
            stopAudio()
            isPermanentlyHidden.value = true
        } else {
            toggleMinimize()
        }
    } catch (error) {
        console.error("Error during hide operation:", error)
    }
}

const stopAudio = () => {
    try {
        if (audioRef.value) {
            playInfo.value.status = PlayStatus.stop
            audioRef.value.pause()
            audioRef.value.currentTime = 0
        }
    } catch (error) {
        console.error("Error during audio stop operation:", error)
    }
}

onMounted(() => {
    nextTick(() => {
        confettiCanvas.value = document.querySelector('.podcast-player__confetti')
    })
})

onBeforeUnmount(() => {
    confettiCanvas.value = null
    audioRef.value = null
})

watch(() => playInfo.value.status, (value) => {
    if (audioRef.value) {
        if (value === PlayStatus.play) {
            audioRef.value.play()
        } else if (value === PlayStatus.pause || value === PlayStatus.stop) {
            audioRef.value.pause()
        }
    }
})
</script>

<style lang="postcss">
.podcast-player {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    padding: 10px;
}

.podcast-player__minimized {
    cursor: pointer;
    font-weight: bold;
}

.podcast-player__expanded {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.podcast-player__hide-btn {
    cursor: pointer;

    &:hover {
        color: var(--vp-c-brand);
    }
}

.podcast-player__highlight {
    background: linear-gradient(56deg, var(--gradient-first-color) 0%, var(--gradient-second-color) 50%, var(--gradient-first-color) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rainbow-text 3s linear infinite;
}

@keyframes rainbow-text {
    0% {
        background-position: 0%;
    }
    100% {
        background-position: 200%;
    }
}

.podcast-player__confetti {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 500px;
    pointer-events: none;
}

.hidden {
    display: none;
}

@media (max-width: 600px) {
    .podcast-player {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 60px;
        border-radius: 0;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 15px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }

    .podcast-player__minimized {
        font-size: 14px;
        text-align: center;
        cursor: pointer;
    }

    .podcast-player__expanded {
        flex-direction: row;
        justify-content: space-between;
    }

    .podcast-player__hide-btn {
        font-size: 14px;
    }
}
</style>
