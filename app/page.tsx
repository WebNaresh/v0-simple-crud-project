import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Users, Award } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link href="/" className="flex items-center justify-center">
          <span className="font-bold text-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">
            EduLearn
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/courses" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Courses
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-teal-500 transition-colors">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50 dark:from-background dark:to-background/90">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-teal-100 dark:bg-teal-900/30 px-3 py-1 text-sm text-teal-700 dark:text-teal-300 mb-2">
                  Learning made simple
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unlock Your Potential with <span className="text-teal-500">EduLearn</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover, learn, and grow with our collection of high-quality courses designed to help you succeed in
                  today's digital world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/courses">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                      Browse Courses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" size="lg">
                      Manage Courses
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[350px] lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/modern-classroom-learning.png"
                  alt="Students learning"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white dark:bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose EduLearn?</h2>
              <p className="mt-4 text-gray-500 md:text-xl max-w-[700px] mx-auto">
                Our platform offers the best learning experience with expert instructors and cutting-edge content.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-teal-50 dark:bg-teal-900/10 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Content</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Expertly crafted courses designed to provide practical skills and knowledge.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-teal-50 dark:bg-teal-900/10 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Instructors</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Learn from industry professionals with years of real-world experience.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-teal-50 dark:bg-teal-900/10 rounded-xl">
                <div className="h-12 w-12 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Recognized Certificates</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Earn certificates that are recognized and valued by employers worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center">
                <span className="font-bold text-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">
                  EduLearn
                </span>
              </Link>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Empowering learners worldwide with quality education.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-3">Platform</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/courses"
                    className="text-gray-500 hover:text-teal-500 dark:text-gray-400 transition-colors"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="text-gray-500 hover:text-teal-500 dark:text-gray-400 transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-sm mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-xs text-gray-500 dark:text-gray-400">
            © 2025 EduLearn. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
