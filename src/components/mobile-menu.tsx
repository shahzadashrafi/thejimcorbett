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
                <Button>
                    <HamburgerMenuIcon/>  Menu
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
            
            <Link href="/" legacyBehavior passHref>
                Home
            </Link>

            <Link href="/" legacyBehavior passHref>
                Jim Corbett Day Visit
            </Link>

            <Link href="/" legacyBehavior passHref>
                Jim Corbett Night Stay
            </Link>           
            </SheetContent>
        </Sheet>
    )
}
