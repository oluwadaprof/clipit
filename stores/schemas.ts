import { z } from "zod/v4"

export const ClipTypeSchema = z.enum(["text", "image"])

export const ClipCardSchema = z.object({
  id: z.string(),
  type: ClipTypeSchema,
  content: z.string(),
  createdAt: z.string().datetime(),
  index: z.number(),
  isPinned: z.boolean()
})

export const ClipStoreSchema = z.array(ClipCardSchema)

export type ClipType = z.infer<typeof ClipTypeSchema>
export type ClipCard = z.infer<typeof ClipCardSchema>
export type ClipStore = z.infer<typeof ClipStoreSchema> 