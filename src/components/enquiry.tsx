"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
//Calender Inputs
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useEffect, useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {useDebounceValue} from 'usehooks-ts';
import { useToast } from "@/hooks/use-toast";
import {enquirySchema} from "@/schemas/enquirySchema";
export default function EnquiryForm(){
   
    //coding for form handling
    //FOR THE FORM FIELDS 
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [date, setDate] = useState('')

    //loding state during form filling state
    const [isFormFilling, setIsFormFilling] = useState(false)
    //form submitting state
    const [isSubmitting, setIsSubmitting] = useState(false)

    //checking email if already exist or not
    const debouncedEmail = useDebounceValue(email, 600)

    //initiate toaster for messages
    const {toast} = useToast()

    //router for using it
    const router = useRouter()

    //zod implementation

    const form = useForm<z.infer<typeof enquirySchema>>({
      resolver : zodResolver(enquirySchema),
      defaultValues : {
        name : '',
        mobile: '',
        email : '',
        date : '' 
      }
    })

    //checking email already exist or not
    useEffect(()=>{
      const checkEmail = async()=>{
        if(debouncedEmail){
          setIsFormFilling(true)
          setEmailMessage('')
          try {
            console.log('Use Effects');
            //const res = await axios.get(`/api/check-email?email=${debouncedEmail}`)
            //setEmailMessage(res.data.message)
          } catch (error) {
            const axiosError = error as AxiosError
          }finally{
            setIsFormFilling(false)
          }
        }
      }
      checkEmail();
    }, [debouncedEmail])

    const onSubmit = async (data : z.infer<typeof enquirySchema>)=>{
      setIsSubmitting(true)
      try {
        const res = await axios.post('/api/enquiry', data)
        toast({
          title : 'Successfull Enquiry',
          description : res.data.message
        })
        router.push('/home')
        setIsSubmitting(false)
      } catch (error) {
        console.error('error in enquiry', error)
        toast({
          title: 'Error',
          description : "No Description",
          variant : 'destructive'
        })
        setIsSubmitting(false)
      }

    }
    
    
    
  return (
    <section className="enquiry">
      <div className="mt-10 text-white flex justify-center">
        <span className="block font-semibold text-xl">Check Availability</span>
      </div>
      <div className="overflow-hidden relative flex items-center min-h-60">
        <div className="relative inset-x-auto w-full z-10">
          <div className="w-2/3 mb-10 md:w-full mx-auto shadow-md rounded-md p-4 ">
            <div className="flex justify-end mb-3 text-red-600 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
              <a className="text-xs">Schedule Your Trip</a>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-2 flex-col md:flex-row center justify-center flex-grow">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Your Name" {...field} 
                            onChange={(e)=>{
                              field.onChange(e) 
                              setName(e.target.value)
                            }}
                          />
                        </FormControl>
                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter Your Mobile Number"
                            {...field}
                            onChange={(e)=>{
                              field.onChange(e) 
                              setMobile(e.target.value)
                            }}
                          />
                        </FormControl>
                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Email Address" {...field} 
                          onChange={(e)=>{
                            field.onChange(e) 
                            setEmail(e.target.value)
                          }}
                          />
                        </FormControl>
                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of birth</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                onChange={(e)=>{
                                  field.onChange(e) 
                                }}

                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-center mt-6">
                  <Button
                    type="submit"
                    className="bg-red-900 text-white font-extrabold text-lg rounded-full px-6 py-3"
                  >
                    Get Quote
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}


  
