import {render, createVNode} from 'vue'
import PodcastPlayer from '../components/PodcastPlayer.vue'
import type { PodcastInfo } from '../type/podcast'

const podcastPlayer = () => {
  if (typeof window === 'undefined') return

  const body = document.getElementsByTagName('body')[0]
  const vnode = createVNode(PodcastPlayer)
  const boxEl = document.createElement('div')
  render(vnode, boxEl)
  document.body.appendChild(boxEl)
}

export default podcastPlayer