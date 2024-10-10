'use client'
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { cn } from "@/lib/utils";




const components: { title: string; href: string; description: string }[] = [
  {
    title: "Zones",
    href: "/corbett-park-zone",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Forest Rest House",
    href: "/forest-rest-house",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
    {
      title: "Blogs",
      href: "/blogs",
      description:
        "Know more about The Jim Corbett National Park - Activities, Adventures, Places, Zones, Forest Lodges, Attractions & More",
    },
    {
      title: "About Us",
      href: "/about",
      description:
        "Know about our travel agency - Agency Informations, Policies, Portfolio and Team",
    },
    {
      title: "FAQs",
      href: "/faq",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
      description: "Visually or semantically separates content.",
    }
    
    
  ];

export default function DesktopMenu(){
        return(
        <div className="nav-container flex flex-row justify-center items-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Home
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Jim Corbett Safari
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/"
                              >
                                <SunIcon className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  Explore Corbett National Park
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Jim Corbett National Park is a ecotourism
                                  forest destination where one can explore
                                  wildlife animals, floral species and natural
                                  jungle experiences.
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem href="/jim-corbett-safari" title="Jim Corbett Day Visit">
                            Day Visit cab journey in dense wildlife zone of
                            Corbett Park
                          </ListItem>
                          <ListItem
                            href="/jim-corbett-night-stay"
                            title="Jim Corbett Night Stay"
                          >
                            Night Accommodation in Corbett Parks Zone with
                            Safari Experiences in Days.
                          </ListItem>
                          <ListItem
                            href="/jim-corbett-extras"
                            title="Extra Adventures"
                          >
                            Hill Stations, Public Forest Destinations and Lake
                            City Tours.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                      <Link href="/pay-now" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Pay Now
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
    )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";