import { create } from 'zustand'

import { dummyClipData } from '~components/home/floating-tab/data'
import type { ClipCard, ClipStore } from './schemas'

interface ClipState {
  clips: ClipStore
  filteredClips: {
    text: ClipCard[]
    image: ClipCard[]
    recent: ClipCard[]
  }
  selectedClips: Set<string>
  addClip: (clip: ClipCard) => void
  removeClip: (id: string) => void
  updateClipOrder: (type: 'text' | 'image' | 'recent', clips: ClipCard[]) => void
  togglePin: (id: string) => void
  toggleSelect: (id: string) => void
  clearSelection: () => void
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
  selectedClips: new Set(),
  
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
    const idsToRemove = id === 'selected' 
      ? state.selectedClips
      : new Set([id])
    
    const newClips = state.clips.filter(clip => !idsToRemove.has(clip.id))
    
    return {
      clips: newClips,
      selectedClips: new Set(),
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
        [type]: clips,
        recent: [...newClips].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ).slice(0, 8)
      }
    }
  }),

  toggleSelect: (id) => set(state => {
    const newSelectedClips = new Set(state.selectedClips)
    if (newSelectedClips.has(id)) {
      newSelectedClips.delete(id)
    } else {
      newSelectedClips.add(id)
    }
    return {
      ...state,
      selectedClips: newSelectedClips
    }
  }),

  clearSelection: () => set(state => ({
    ...state,
    selectedClips: new Set()
  })),

  togglePin: (id) => set(state => {
    const idsToToggle = id === 'selected'
      ? state.selectedClips
      : new Set([id])

    const newClips = state.clips.map(clip => 
      idsToToggle.has(clip.id) 
        ? { ...clip, isPinned: !clip.isPinned }
        : clip
    )

    return {
      clips: newClips,
      selectedClips: new Set(),
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