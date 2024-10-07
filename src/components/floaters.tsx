'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { MobileIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { CalendarHeartIcon, FormInputIcon, ListOrderedIcon, MailIcon, PhoneCall, ShoppingCartIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import EnquiryForm from "./enquiry";

export default function Floaters() {
    return (
        <div className="">
            <div className="fixed bottom-4 right-4 z-50">
                <Link className="text-white font-bold py-2 px-4 rounded-full shadow-lg font-medium text-gray-900 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 h-10 z-40" href="tel:+919917479999">
                    <span className="w-auto inline-flex text-center items-center"><PhoneCall className="h-4 w-4" /> &nbsp;Call Us</span>
                </Link>
            </div>
            <div className="fixed bottom-4 left-4 z-50">
                <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 z-40" href="mailto:helpdesk.jimcorbett@gmail.com">
                    <span className="w-auto inline-flex text-center items-center"><MailIcon className="h-4 w-4" /> &nbsp;Email</span>
                </Link>
            </div>
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ">
                <button className="text-white font-bold py-2 px-4 rounded-full shadow-lg text-sm font-medium text-gray-900 group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    
                    <Dialog>
                        <DialogTrigger className="inline-flex">
                        <span className="w-auto inline-flex text-center items-center"><CalendarHeartIcon className="h-4 w-4" /> &nbsp;Enquiry</span>
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
                </button>
            </div>
        </div>
    )
}