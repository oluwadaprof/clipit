import { create } from 'zustand'

import { dummyClipData } from '~components/tool/floating-tab/data'
import type { ClipCard, ClipStore } from './schemas'

interface ClipState {
  clips: ClipStore
  filteredClips: {
    text: ClipCard[]
    image: ClipCard[]
    recent: ClipCard[]
  }
  addClip: (clip: ClipCard) => void
  removeClip: (id: string) => void
  updateClipOrder: (type: 'text' | 'image', clips: ClipCard[]) => void
  togglePin: (id: string) => void
}

export const useClipStore = create<ClipState>((set, get) => ({
  clips: dummyClipData,
  filteredClips: {
    text: dummyClipData.filter(clip => clip.type === 'text'),
    image: dummyClipData.filter(clip => clip.type === 'image'),
    recent: [...dummyClipData].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    ).slice(0, 8)
  },
  
  addClip: (clip) => set(state => {
    const newClips = [...state.clips, clip]
    return {
      clips: newClips,
      filteredClips: {
        text: newClips.filter(c => c.type === 'text'),
        image: newClips.filter(c => c.type === 'image'),
        recent: [...newClips].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ).slice(0, 8)
      }
    }
  }),

  removeClip: (id) => set(state => {
    const newClips = state.clips.filter(clip => clip.id !== id)
    return {
      clips: newClips,
      filteredClips: {
        text: newClips.filter(c => c.type === 'text'),
        image: newClips.filter(c => c.type === 'image'),
        recent: [...newClips].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ).slice(0, 8)
      }
    }
  }),

  updateClipOrder: (type, clips) => set(state => {
    const otherClips = state.clips.filter(clip => clip.type !== type)
    const newClips = [...otherClips, ...clips].map((clip, index) => ({
      ...clip,
      index
    }))
    
    return {
      clips: newClips,
      filteredClips: {
        ...state.filteredClips,
        [type]: clips
      }
    }
  }),

  togglePin: (id) => set(state => {
    const newClips = state.clips.map(clip => 
      clip.id === id ? { ...clip, isPinned: !clip.isPinned } : clip
    )
    return {
      clips: newClips,
      filteredClips: {
        text: newClips.filter(c => c.type === 'text'),
        image: newClips.filter(c => c.type === 'image'),
        recent: [...newClips].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ).slice(0, 8)
      }
    }
  })
})) 