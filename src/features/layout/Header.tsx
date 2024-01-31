"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const Header = ({className}: {className?: string}) => {
  return (<div className={(cn("container max-w-2xl flex items-center h-full", className))}>
    <header className="w-full flex justify-between items-center p-2">
      <Link href={"/"}>
        <h1 className="text-2xl font-bold text-foreground">Universal Scraper</h1>
      </Link>
      <div>
        <HeaderNavigationMenu />
      </div>
    </header>
  </div>)
}

const addMenuItems = [
  {
    title: 'Artist',
    description: 'Create a artist gives you the ability to download same artist from multiples sources.',
    href: '/artists/create'
  },
  {
    title: 'Source',
    description: 'Add a source of an artist to start the download of its content. You must have created the artist first!',
    href: '/artists/sources/add'
  }
]

export const HeaderNavigationMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Add</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {addMenuItems.map((item) => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image src="/icon.png" width={"64"} height={"64"} alt="universal scraper icon" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Universal Scraper
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed UI that permit to scrape a large variety of websites.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/migration" title="Install & Migrate">
                All you need to know to migrate universal scraper app to the latest version. Whatever the version you are!
              </ListItem>
              <ListItem href="/configuration" title="Configuration">
                Here you can configure the app behavior such as download speed, its number, the resolution of files, etc...
              </ListItem>
              <ListItem href="https://discord.gg/GE8MNBPXFy" target="_blank" title="Support">
                In case you need support using our app, just join our discord clicking this link! Someone will probably help you!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"