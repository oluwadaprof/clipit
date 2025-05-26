export type ClipType = "text" | "image"

export interface ClipCardData {
  id: string
  type: ClipType
  content: string
  createdAt: string
  index: number
  isPinned: boolean
}

export const dummyClipData: ClipCardData[] = [
  {
    id: "clip-1",
    type: "text",
    content: "The quick brown fox jumps over the lazy dog. This is a sample text clip that demonstrates how text content appears in the card.",
    createdAt: "2024-03-10T10:30:00Z",
    index: 0,
    isPinned: true
  },
  {
    id: "clip-2",
    type: "image",
    content: "data-base64:~assets/empty-v2.png",
    createdAt: "2024-03-10T10:25:00Z",
    index: 1,
    isPinned: false
  },
  {
    id: "clip-3",
    type: "text",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "2024-03-10T10:20:00Z",
    index: 2,
    isPinned: false
  },
  {
    id: "clip-4",
    type: "image",
    content: "data-base64:~assets/logo-v2.png",
    createdAt: "2024-03-10T10:15:00Z",
    index: 3,
    isPinned: true
  },
  {
    id: "clip-5",
    type: "text",
    content: "Important meeting notes: Discuss project timeline and deliverables with the team next week.",
    createdAt: "2024-03-10T10:10:00Z",
    index: 4,
    isPinned: false
  },
  // ... Add 10 more similar items with alternating types
]
