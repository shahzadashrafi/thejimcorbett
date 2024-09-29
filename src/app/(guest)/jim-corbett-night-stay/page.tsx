"use client";

  import { AspectRatio } from "@/components/ui/aspect-ratio"
  
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
  
export default function CorbettSafari() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
    return(
        


            

        <section className="md:px-0">
            <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline">Night Stay </span>
                                <span className="block text-white xl:inline">In The Wild..</span>
                            </h1>
                            <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl"> never been easier to build beautiful websites that convey your message and tell your story.</p>
                            
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                        
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Features
      </h2>
      <Carousel items={cards} />
    </div>
        </section>

        
     
        


        
    )





}

const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
   
  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "/hero1.png",
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "/hero1.png",
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "/hero1.png",
      content: <DummyContent />,
    },
   
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "/hero1.png",
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "/hero1.png",
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "/hero1.png",
      content: <DummyContent />,
    },
  ];