'use client';

import { SidebarItems } from "@/types";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

interface SidebarMobileProps{
    sidebarItems : SidebarItems;
}


export default function MobileMenu(props: SidebarMobileProps){
    return(
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    SideNav
                </Button>
            </SheetTrigger>
            <SheetContent  side='left'>
                 SidebarContent
            </SheetContent>
        </Sheet>
    )
}
