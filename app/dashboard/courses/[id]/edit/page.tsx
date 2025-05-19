"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CourseForm } from "@/components/course-form"
import { getCourseById } from "@/lib/data"
import { updateCourse } from "@/lib/actions"

interface EditCoursePageProps {
  params: {
    id: string
  }
}

export default function EditCoursePage({ params }: EditCoursePageProps) {
  const router = useRouter()
  const course = getCourseById(params.id)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!course) {
    notFound()
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await updateCourse(params.id, formData)
      router.push("/dashboard")
      router.refresh()
    } catch (error) {
      console.error("Failed to update course:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Link href={`/dashboard/courses/${params.id}`} className="mr-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Edit Course</h1>
          <p className="text-muted-foreground mt-1">Update course information</p>
        </div>
      </div>

      <div className="border rounded-lg p-6 bg-card shadow-sm">
        <CourseForm onSubmit={handleSubmit} isSubmitting={isSubmitting} defaultValues={course} />
      </div>
    </div>
  )
}
