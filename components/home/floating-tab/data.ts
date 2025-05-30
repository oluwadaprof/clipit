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
    isPinned: false
  },
  {
    id: "clip-2",
    type: "image",
    content: "data-base64:~assets/data-4.jpg",
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
    content: "data-base64:~assets/data-3.jpg",
    createdAt: "2024-03-10T10:15:00Z",
    index: 3,
    isPinned: false
  },
  {
    id: "clip-5",
    type: "text",
    content: "Important meeting notes: Discuss project timeline and deliverables with the team next week.",
    createdAt: "2024-03-10T10:10:00Z",
    index: 4,
    isPinned: false
  },
  {
    id: "clip-6",
    type: "image",
    content: "data-base64:~assets/data-1.webp",
    createdAt: "2024-03-10T10:05:00Z",
    index: 5,
    isPinned: false
  },
  {
    id: "clip-7",
    type: "text",
    content: "Remember to update the documentation for the new feature release scheduled for next month.",
    createdAt: "2024-03-10T10:00:00Z",
    index: 6,
    isPinned: false
  },
  {
    id: "clip-8",
    type: "image",
    content: "data-base64:~assets/data-2.png",
    createdAt: "2024-03-10T09:55:00Z",
    index: 7,
    isPinned: false
  },
  {
    id: "clip-9",
    type: "text",
    content: "Client feedback: UI improvements needed for the dashboard navigation system.",
    createdAt: "2024-03-10T09:50:00Z",
    index: 8,
    isPinned: false
  },
  {
    id: "clip-10",
    type: "image",
    content: "data-base64:~assets/data-3.jpg",
    createdAt: "2024-03-10T09:45:00Z",
    index: 9,
    isPinned: false
  },
  {
    id: "clip-11",
    type: "text",
    content: "API endpoint documentation: GET /api/v1/users returns paginated list of active users.",
    createdAt: "2024-03-10T09:40:00Z",
    index: 10,
    isPinned: false
  },
  {
    id: "clip-12",
    type: "image",
    content: "data-base64:~assets/data-3.jpg",
    createdAt: "2024-03-10T09:35:00Z",
    index: 11,
    isPinned: false
  },
  {
    id: "clip-13",
    type: "text",
    content: "Bug report: User authentication fails when special characters are used in passwords.",
    createdAt: "2024-03-10T09:30:00Z",
    index: 12,
    isPinned: false
  },
  {
    id: "clip-14",
    type: "image",
    content: "data-base64:~assets/data-1.webp",
    createdAt: "2024-03-10T09:25:00Z",
    index: 13,
    isPinned: false
  },
  {
    id: "clip-15",
    type: "text",
    content: "Weekly team meeting agenda: 1. Sprint review 2. Resource allocation 3. upcoming deadlines",
    createdAt: "2024-03-10T09:20:00Z",
    index: 14,
    isPinned: false
  },
  {
    id: "clip-16",
    type: "image",
    content: "data-base64:~assets/data-2.png",
    createdAt: "2024-03-10T09:15:00Z",
    index: 15,
    isPinned: false
  },
  {
    id: "clip-17",
    type: "text",
    content: "Code review feedback: Implement error handling for edge cases in the payment module.",
    createdAt: "2024-03-10T09:10:00Z",
    index: 16,
    isPinned: false
  },
  {
    id: "clip-18",
    type: "image",
    content: "data-base64:~assets/data-4.jpg",
    createdAt: "2024-03-10T09:05:00Z",
    index: 17,
    isPinned: false
  },
  {
    id: "clip-19",
    type: "text",
    content: "Database migration plan: Schedule downtime for schema updates this weekend.",
    createdAt: "2024-03-10T09:00:00Z",
    index: 18,
    isPinned: false
  },
  {
    id: "clip-20",
    type: "image",
    content: "data-base64:~assets/data-2.png",
    createdAt: "2024-03-10T08:55:00Z",
    index: 19,
    isPinned: false
  }
]
