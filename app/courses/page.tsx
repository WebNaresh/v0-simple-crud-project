import { getCourses } from "@/lib/data"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoursesPage() {
  const courses = getCourses()

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Explore Courses</h1>
          <p className="text-muted-foreground mt-1">Discover our collection of high-quality courses</p>
        </div>
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search courses..." className="pl-8 w-full sm:w-[250px]" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[150px]">
              <SelectValue placeholder="Filter by level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-16 border rounded-lg bg-muted/40">
          <h2 className="text-xl font-medium">No courses available</h2>
          <p className="text-muted-foreground mt-2 mb-6">Check back later for new courses.</p>
          <Button className="bg-teal-600 hover:bg-teal-700">Notify Me of New Courses</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              actions={<Button className="w-full bg-teal-600 hover:bg-teal-700 mt-4">View Course Details</Button>}
            />
          ))}
        </div>
      )}
    </div>
  )
}
