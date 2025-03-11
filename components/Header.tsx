import React from 'react'
import {Button} from "./ui/button";
import Link from "next/link";
import { BookMarkedIcon, BookOpen } from 'lucide-react';
import DarkMode from "./DarkModeToggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import {SearchInput} from "./SearchInput";

function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* left header*/}
            <div className="flex items-center gap-4">
            <Link
              href="/"
              prefetch={false}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary/90 to-primary bg-clip-text text-transparent">
                Thomas-CoursePlatform
              </span>
            </Link>

            <SearchInput />
            </div>

            {/* right header*/}
            <div className="flex items-center space-x-2 md:space-x-4">
              <nav>
              <Link
                prefetch={false}
                href="/course"
                className="flex space-x-2 items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors md:border md:border-border md:rounded-md md:px-4 md:py-2"
              >
                <BookMarkedIcon className="h-4 w-4" />
                <span className="hidden md:block">Course</span>
              </Link>
              </nav>

              <DarkMode />
              <SignedIn>
                <UserButton></UserButton>
              </SignedIn>

              <SignedOut>
                <SignInButton>
                    <Button variant="outline"> Sign In</Button>
                </SignInButton>
              </SignedOut>
            </div>
       </div>
      </div>
    </header>
  )
}

export default Header