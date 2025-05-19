import type React from "react"
import Link from "next/link"
import { BookOpen, LayoutDashboard, User, Settings, LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MobileNav } from "@/components/mobile-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center">
          <Link href="/" className="flex items-center justify-center mr-6">
            <span className="font-bold text-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text">
              EduLearn
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/courses"
              className="text-sm font-medium hover:text-teal-500 transition-colors flex items-center"
            >
              <BookOpen className="mr-1 h-4 w-4" />
              Courses
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-teal-500 transition-colors flex items-center"
            >
              <LayoutDashboard className="mr-1 h-4 w-4" />
              Dashboard
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <MobileNav />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/diverse-avatars.png" alt="User" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin User</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 bg-gray-50 dark:bg-gray-900/20">{children}</main>
      <footer className="border-t bg-white dark:bg-background">
        <div className="container mx-auto px-4 py-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 EduLearn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
