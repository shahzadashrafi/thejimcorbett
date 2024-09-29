'use client';
// import { useMediaQuery } from "@uidotdev/usehooks";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
export default function MenuToggle(){
    // const isDesktop = useMediaQuery('(min-width:640px)');
        // if(isDesktop) return (<DesktopMenu />);
        return (<MobileMenu />);
}


