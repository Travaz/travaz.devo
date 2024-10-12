let animationFrame
export const audioVolumeFade = (audioEl: HTMLAudioElement, isFadeIn?: boolean) => new Promise((resolve, reject) => {
    cancelAnimationFrame(animationFrame)

    audioEl.volume = isFadeIn ? 0 : 1

    let done = false, gap = 30
    const step = () => {
        audioEl.volume = Math.min(Math.max(audioEl.volume + (isFadeIn ? gap : -gap) / 1000, 0), 1)

        done = audioEl.volume === 1 || audioEl.volume === 0

        if (!done) {
            gap = Math.max(gap - 1, 5)
            animationFrame = requestAnimationFrame(step)
        } else {
            resolve(audioEl.volume)
        }
    }
    animationFrame = requestAnimationFrame(step)
})