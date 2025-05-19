import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Clock, GraduationCap, Edit, ArrowLeft, Users, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCourseById } from "@/lib/data"
import { DeleteCourseButton } from "@/components/delete-course-button"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = getCourseById(params.id)

  if (!course) {
    notFound()
  }

  // Get level color
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
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
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <div className="flex items-center mt-2">
                <Badge className={`${getLevelColor(course.level)}`}>{course.level}</Badge>
                <span className="text-sm text-muted-foreground ml-3 flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {course.duration} hours
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link href={`/dashboard/courses/${course.id}/edit`}>
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </Link>
              <DeleteCourseButton id={course.id} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{course.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Learning Objectives</CardTitle>
              <CardDescription>What students will learn in this course</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <BookOpen className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span>Understand core concepts and principles</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <BookOpen className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span>Apply knowledge to real-world scenarios</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <BookOpen className="h-3 w-3 text-teal-600 dark:text-teal-400" />
                  </div>
                  <span>Develop practical skills through hands-on exercises</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                  <GraduationCap className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="font-medium">{course.level}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{course.duration} hours</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                  <CalendarDays className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-medium">{new Date(course.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                  <Users className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                  <p className="font-medium">{course.instructor}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
                  <Link href="#">Course slides</Link>
                </li>
                <li className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
                  <Link href="#">Exercise files</Link>
                </li>
                <li className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
                  <Link href="#">Additional reading</Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
