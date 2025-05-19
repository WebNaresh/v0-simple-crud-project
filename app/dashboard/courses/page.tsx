import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCourses } from "@/lib/data"
import { CourseCard } from "@/components/course-card"

export default function CoursesPage() {
  const courses = getCourses()

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">All Courses</h1>
          <p className="text-muted-foreground mt-1">Manage your course catalog</p>
        </div>
        <Link href="/dashboard/courses/new">
          <Button className="bg-teal-600 hover:bg-teal-700">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Course
          </Button>
        </Link>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-16 border rounded-lg bg-muted/40">
          <h2 className="text-xl font-medium mb-2">No courses yet</h2>
          <p className="text-muted-foreground mb-6">Get started by creating your first course.</p>
          <Link href="/dashboard/courses/new">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Course
            </Button>
          </Link>
        </div>
      ) : (
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
      )}
    </div>
  )
}
