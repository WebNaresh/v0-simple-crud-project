import type React from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar, User } from "lucide-react"
import type { Course } from "@/lib/types"

interface CourseCardProps {
  course: Course
  actions?: React.ReactNode
}

export function CourseCard({ course, actions }: CourseCardProps) {
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

  // Generate a course image based on the title
  const courseImageQuery = `education course ${course.title.toLowerCase()} ${course.level.toLowerCase()}`

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={`/abstract-geometric-shapes.png?height=192&width=384&query=${courseImageQuery}`}
          alt={course.title}
          fill
          className="object-cover"
        />
        <Badge className={`absolute top-3 right-3 ${getLevelColor(course.level)}`}>{course.level}</Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold leading-tight">{course.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3 mb-4 text-sm">{course.description}</p>
        <div className="flex flex-wrap gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center mr-4">
            <Clock className="mr-1 h-4 w-4" />
            <span>{course.duration} hours</span>
          </div>
          <div className="flex items-center mr-4">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{new Date(course.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center w-full mt-1">
            <User className="mr-1 h-4 w-4" />
            <span>{course.instructor}</span>
          </div>
        </div>
      </CardContent>
      {actions && <CardFooter>{actions}</CardFooter>}
    </Card>
  )
}
