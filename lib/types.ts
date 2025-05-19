export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  duration: number
  level: "Beginner" | "Intermediate" | "Advanced"
  createdAt: string
  updatedAt: string
}
