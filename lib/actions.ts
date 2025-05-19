"use server"

import { revalidatePath } from "next/cache"
import type { Course } from "./types"
import { getCourses } from "./data"

// Simulated database operations with test data
let courses = getCourses()

// Create a new course
export async function createCourse(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const instructor = formData.get("instructor") as string
    const duration = Number.parseInt(formData.get("duration") as string)
    const level = formData.get("level") as "Beginner" | "Intermediate" | "Advanced"

    // Validate inputs
    if (!title || !description || !instructor || isNaN(duration) || duration <= 0 || !level) {
      throw new Error("Invalid course data")
    }

    // Create a new course with a unique ID
    const newCourse: Course = {
      id: Date.now().toString(),
      title,
      description,
      instructor,
      duration,
      level,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Add to our "database"
    courses.push(newCourse)

    revalidatePath("/dashboard")
    revalidatePath("/courses")
    return { success: true }
  } catch (error) {
    console.error("Error creating course:", error)
    return { success: false, error: (error as Error).message }
  }
}

// Update an existing course
export async function updateCourse(id: string, formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const instructor = formData.get("instructor") as string
    const duration = Number.parseInt(formData.get("duration") as string)
    const level = formData.get("level") as "Beginner" | "Intermediate" | "Advanced"

    // Validate inputs
    if (!title || !description || !instructor || isNaN(duration) || duration <= 0 || !level) {
      throw new Error("Invalid course data")
    }

    // Find the course index
    const courseIndex = courses.findIndex((course) => course.id === id)

    if (courseIndex === -1) {
      throw new Error("Course not found")
    }

    // Update the course
    courses[courseIndex] = {
      ...courses[courseIndex],
      title,
      description,
      instructor,
      duration,
      level,
      updatedAt: new Date().toISOString(),
    }

    revalidatePath("/dashboard")
    revalidatePath("/courses")
    revalidatePath(`/dashboard/courses/${id}`)
    return { success: true }
  } catch (error) {
    console.error("Error updating course:", error)
    return { success: false, error: (error as Error).message }
  }
}

// Delete a course
export async function deleteCourse(id: string) {
  try {
    // Filter out the course with the given ID
    courses = courses.filter((course) => course.id !== id)

    revalidatePath("/dashboard")
    revalidatePath("/courses")
    return { success: true }
  } catch (error) {
    console.error("Error deleting course:", error)
    return { success: false, error: (error as Error).message }
  }
}
