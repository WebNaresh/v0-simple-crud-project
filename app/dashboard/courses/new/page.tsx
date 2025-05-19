"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CourseForm } from "@/components/course-form"
import { createCourse } from "@/lib/actions"

export default function NewCoursePage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await createCourse(formData)
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("Failed to create course:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Link href="/dashboard" className="mr-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Create New Course</h1>
          <p className="text-muted-foreground mt-1">Fill in the details to create a new course</p>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-card shadow-sm">
        <CourseForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </div>
  )
}
