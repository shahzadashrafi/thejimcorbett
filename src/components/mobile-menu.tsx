'use client';

import { SidebarItems } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from 'next/image'
import Link from "next/link";
import { NavigationMenuLink } from "./ui/navigation-menu";

interface SidebarMobileProps{
    sidebarItems : SidebarItems;
}


export default function MobileMenu(props: any){
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button className="absolute top-5 left-5 rounded-full">
                    <HamburgerMenuIcon/> 
                </Button>
            </SheetTrigger>
            <SheetContent  side='left'>
            <div className="mb-10 logo-container flex flex-auto items-center justify-center">
                <Image
                    src="/logo.png"
                    height={150}
                    width={150}
                    alt="TheJimCorbett Logo"
                    className="justify-center items-center flex"
                />
            </div>
            

<nav className="">
  
    
      <ul className="flex flex-col font-medium p-0 md:p-0 mt-4 ">
        <li>
          <a href="#" className="block py-2 px-3 text-white" aria-current="page">Home</a>
        </li>
        
        <li>
          <a href="#" className="block py-2 px-3 text-white" aria-current="page">Jim Corbett Day Visit</a>
        </li>

        <li>
          <a href="#" className="block py-2 px-3 text-white" aria-current="page">Jim Corbett Night Stay</a>
        </li>

        <li>
          <a href="#" className="block py-2 px-3 text-white" aria-current="page">About Us</a>
        </li>
      </ul>
  
</nav>

                   
            </SheetContent>
        </Sheet>
    )
}
