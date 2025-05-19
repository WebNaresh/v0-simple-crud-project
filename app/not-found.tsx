import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        <div className="flex justify-center">
          <Link href="/">
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Home className="mr-2 h-4 w-4" />
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
