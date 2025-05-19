"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, BookOpen, LayoutDashboard, User, Settings, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-2">
          <Link href="/" className="flex items-center mb-8" onClick={() => setOpen(false)}>
            <span className="font-bold text-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">
              EduLearn
            </span>
          </Link>
          <nav className="flex flex-col gap-4">
            <Link
              href="/courses"
              className="flex items-center text-sm font-medium py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Courses
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center text-sm font-medium py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
            <div className="h-px bg-border my-2" />
            <Link
              href="#"
              className="flex items-center text-sm font-medium py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
            <Link
              href="#"
              className="flex items-center text-sm font-medium py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
            <Link
              href="#"
              className="flex items-center text-sm font-medium py-2 px-3 rounded-md hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
