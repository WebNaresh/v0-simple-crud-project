import type { Course } from "./types"

// Test data - simulating a database
const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    instructor: "Jane Smith",
    duration: 12,
    level: "Beginner",
    createdAt: "2025-01-15T00:00:00.000Z",
    updatedAt: "2025-01-15T00:00:00.000Z",
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    description: "Master advanced React patterns and techniques to build scalable applications.",
    instructor: "John Doe",
    duration: 8,
    level: "Advanced",
    createdAt: "2025-02-10T00:00:00.000Z",
    updatedAt: "2025-02-10T00:00:00.000Z",
  },
  {
    id: "3",
    title: "Data Science Fundamentals",
    description: "An introduction to data science concepts, tools, and methodologies.",
    instructor: "Alex Johnson",
    duration: 15,
    level: "Intermediate",
    createdAt: "2025-03-05T00:00:00.000Z",
    updatedAt: "2025-03-05T00:00:00.000Z",
  },
]

// Get all courses
export function getCourses(): Course[] {
  return [...courses]
}

// Get course by ID
export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id)
}
