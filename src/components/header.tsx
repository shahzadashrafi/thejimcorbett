"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import EnquiryForm  from "./enquiry";
import {Pencil2Icon, TwitterLogoIcon, InstagramLogoIcon, GlobeIcon, EnvelopeClosedIcon, MobileIcon, SunIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import MenuToggle from "./menu-toggle";


export default function Header(){
//SETTING UP DESKTOP MODE BREAKPOINT
  const isDesktop = useMediaQuery('(min-width:640px)');
//IF DESKTOP MODE IS ACTIVE
    
  if(isDesktop) return (<div className="container w-full flex flex-col py-5 px-0">
    <div className="upper-container flex flex-row pb-3">
      
      <div className="left-container flex-none">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="topbar">
                <Link href={"tel:+919690080999"}>
                  <MobileIcon className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Support Team : +91-96900-80999</p>
              <p>Support Team : +91-94118-47777</p>
              <p>Support Team : +91-74660-72660</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="topbar">
                <Link href={"mailto:support@thejimcorbett.com"}>
                  <EnvelopeClosedIcon className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Support Team : support@thejimcorbett.com</p>
              <p>Support Team : helpdesk.jimcorbett@gmail.com</p>
              <p>Support Team : helpline@thejimcorbett.com</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="topbar">
                <Link
                  href={
                    "https://www.google.com/maps/dir//29.396875,79.1248749/@29.3954479,79.1242323,248m"
                  }
                >
                  <GlobeIcon className="h-4 w-4" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>GSTIN : 05ERMPS0036M3ZD</p>
              <p>Company : Corbett eServices</p>
              <p>
                Address : Near Corbett Tiger Reserve, Ramnagar, Nainital,
                Uttarakhand, India - 244715
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="logo-container flex flex-auto items-center justify-center">
        <Image
          src="/logo.png"
          height={150}
          width={150}
          alt="TheJimCorbett Logo"
          className="justify-center items-center flex"
        />
      </div>

      <div className="right-container flex-none">
        <Button variant="topbar">
          <Link href={"mailto:support@thejimcorbett.com"}>
            <InstagramLogoIcon className="h-4 w-4" />
          </Link>
        </Button>

        <Button variant="topbar">
          <Link href={"mailto:support@thejimcorbett.com"}>
            <TwitterLogoIcon className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="ghost">
          <Dialog>
            <DialogTrigger className="inline-flex">
              <Pencil2Icon />
              <span className="px-2">Enquiry</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Booking Form</DialogTitle>
                <DialogDescription>
                  <EnquiryForm />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </Button>
      </div>
    </div>
    
    <MenuToggle />
  </div>)
  return (<div className="container w-full flex flex-col py-5 px-0">
  <div className="upper-container flex flex-row pb-3">
    
   
    <div className="logo-container flex flex-auto items-center justify-center">
      <Image
        src="/logo.png"
        height={150}
        width={150}
        alt="TheJimCorbett Logo"
        className="justify-center items-center flex"
      />
    </div>

    
  </div>
  
  <MenuToggle />
</div>);

}





