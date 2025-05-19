import Link from "next/link"
import { PlusCircle, BookOpen, Users, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCourses } from "@/lib/data"
import { CourseCard } from "@/components/course-card"

export default function DashboardPage() {
  const courses = getCourses()

  // Calculate some stats for the dashboard
  const totalCourses = courses.length
  const totalHours = courses.reduce((acc, course) => acc + course.duration, 0)
  const averageRating = 4.7 // Placeholder for demo

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Course Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your courses and track performance</p>
        </div>
        <Link href="/dashboard/courses/new">
          <Button className="bg-teal-600 hover:bg-teal-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Course
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCourses}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalCourses > 0 ? "+1 from last month" : "Add your first course"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHours}</div>
            <p className="text-xs text-muted-foreground mt-1">Hours of content</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageRating}</div>
            <p className="text-xs text-muted-foreground mt-1">Out of 5.0</p>
          </CardContent>
        </Card>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-16 border rounded-lg bg-muted/40">
          <div className="mx-auto w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <h2 className="text-xl font-medium mb-2">No courses yet</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get started by creating your first course. It only takes a few minutes to set up.
          </p>
          <Link href="/dashboard/courses/new">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Your Courses</h2>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                actions={
                  <div className="flex space-x-2 mt-4">
                    <Link href={`/dashboard/courses/${course.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View
                      </Button>
                    </Link>
                    <Link href={`/dashboard/courses/${course.id}/edit`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Edit
                      </Button>
                    </Link>
                  </div>
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
