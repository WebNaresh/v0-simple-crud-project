"use client"

import type React from "react"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Course } from "@/lib/types"

interface CourseFormProps {
  onSubmit: (formData: FormData) => Promise<void>
  isSubmitting: boolean
  defaultValues?: Course
}

export function CourseForm({ onSubmit, isSubmitting, defaultValues }: CourseFormProps) {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formRef.current) {
      const formData = new FormData(formRef.current)
      await onSubmit(formData)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Enter the basic details about your course</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Course Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter course title"
              required
              defaultValue={defaultValues?.title || ""}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Enter course description"
              rows={4}
              required
              defaultValue={defaultValues?.description || ""}
              className="resize-none"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Course Details</CardTitle>
          <CardDescription>Provide additional information about your course</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="instructor">Instructor</Label>
              <Input
                id="instructor"
                name="instructor"
                placeholder="Enter instructor name"
                required
                defaultValue={defaultValues?.instructor || ""}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (hours)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                min="1"
                placeholder="Enter duration in hours"
                required
                defaultValue={defaultValues?.duration?.toString() || ""}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="level">Level</Label>
            <Select name="level" defaultValue={defaultValues?.level || "Beginner"}>
              <SelectTrigger id="level">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting} className="bg-teal-600 hover:bg-teal-700">
          {isSubmitting ? "Saving..." : defaultValues ? "Update Course" : "Create Course"}
        </Button>
      </div>
    </form>
  )
}
