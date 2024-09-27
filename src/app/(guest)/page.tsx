import EnquiryForm from "@/components/enquiry";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnvelopeOpenIcon, EyeOpenIcon, Pencil2Icon } from "@radix-ui/react-icons";
import Image from "next/image";


//carousel items
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

//form validations

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
      <section className="home-header">
        <div className="grid grid-col-1 md:grid-cols-2">
        <div className="relative w-full mb-10 md:mb-0 overflow-hidden hover:bg-slate-900 hover:text-white hover:opacity-80 hover:rounded">
            <AspectRatio ratio={4 / 4} className="bg-none">
              <Image
                src="/hero1.png"
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="relative bottom-0 left-0 w-full px-6 py-2">
              <h1 className="max-w-7xl text-center pl-4 mx-auto text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-5">
                Jim Corbett Day Visit
              </h1>
              <div className="flex justify-between">
                <Button variant="details" size="lg">
                  <Dialog>
                    <DialogTrigger className="inline-flex">
                      <EyeOpenIcon />
                      <span className="px-2">View Details</span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Jim Corbett Day Visit</DialogTitle>
                        <DialogDescription>
                          <div className="my-5 overflow-y-auto max-h-[70vh]">
                            <div className="relative flex flex-col justify-center overflow-hidden">
                              <div className="w-full items-center mx-auto max-w-screen-lg">
                                <div className="group grid w-full grid-cols-1">
                                  <div className="relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4  before:bottom-0 before:left-0 before:rounded-lg  before:transition-all overflow-hidden">
                                    <div className="rounded-xl overflow-hidden">
                                      <Image
                                        src="/hero1.png"
                                        width={800}
                                        height={800}
                                        alt="s"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-4">
                                    <div className="overflow-y-auto">
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Simply Air Conditioning London are fixed
                                        system heating and air conditioning
                                        installation specialists. Because we’ve
                                        tested all heating and air conditioning
                                        unit manufacturers before using them
                                        there are no hidden surprises for our
                                        customers. We only supply air
                                        conditioning units from the leading
                                        manufacturers so any system we fit will
                                        be of the highest quality. We also
                                        thoroughly test every type of unit
                                        before supplying..
                                      </p>

                                      <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                        Conditioning installation packages
                                      </h3>
                                      <ul
                                        role="list"
                                        className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                                      >
                                        <li>
                                          5 cups chopped Porcini mushrooms
                                        </li>
                                        <li>1/2 cup of olive oil</li>
                                        <li>3lb of celery</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="group grid w-full grid-cols-1">
                                  <div className="mt-6">
                                    <div className="px-4 mb-4 mt-4 overflow-y-auto">
                                      <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                        Available Zones
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Bijrani, Dhela, Jhirna, Garjiya,
                                        Durgadevi, Phanto, Sitavani
                                      </p>

                                      <h3 className="font-semibold text-xl text-gray-400">
                                        Available Shifts
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        <b>Morning</b> (05:30 AM ‐ 09:30 AM )
                                        <br />
                                        <b>Afternoon</b> (01:30 PM ‐ 05:30 PM )
                                      </p>

                                      <h3 className="font-semibold text-xl text-gray-400">
                                        Attractions
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Floral Species, Fauna - Royal Bengal
                                        Tigers, Deers, Sambhar Deers, Cheetal,
                                        Leopards, Monitor Lizards, Crocodiles,
                                        Fishes, Marine Species, Reptiles,
                                        Snakes, Birds and More.
                                      </p>

                                      <h3 className="font-semibold text-xl text-gray-400">
                                        Restrictions
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Polythene Begs, No Smoking Area, No
                                        Alcohol, Foods, Noisy Stuffs.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="relative inline-flex items-center flex-col before:block before:absolute before:h-1/6 before:w-4  before:bottom-0 before:left-0 before:rounded-lg  before:transition-all overflow-hidden">
                                    <div className="mt-10 text-black inline-flex justify-center">
                                      <span className="block font-semibold text-xl inline-flex">
                                        Enquiry
                                      </span>
                                    </div>
                                    <div className="overflow-hidden relative flex items-center min-h-60">
                                      <div className="relative inset-x-auto w-full z-10">
                                        <EnquiryForm/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </Button>
                <Button variant="enquiry" size="lg">
                  <Dialog>
                    <DialogTrigger className="inline-flex">
                      <EnvelopeOpenIcon />
                      <span className="px-2">Get Enquiry</span>
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
          </div>

          <div className="relative w-full mb-10 md:mb-0 overflow-hidden hover:bg-slate-900 hover:text-white hover:opacity-80 hover:rounded">
            <AspectRatio ratio={4 / 4} className="bg-none">
              <Image
                src="/hero1.png"
                alt="Photo by Drew Beamer"
                fill
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <div className="relative bottom-0 left-0 w-full px-6 py-2">
              <h1 className="max-w-7xl py-5 pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Jim Corbett Day Visit
              </h1>
              <div className="flex justify-between">
                <Button variant="details" size="lg">
                  <Dialog>
                    <DialogTrigger className="inline-flex">
                      <EyeOpenIcon />
                      <span className="px-2">View Details</span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Jim Corbett Day Visit</DialogTitle>
                        <DialogDescription>
                          <div className="my-5 overflow-y-auto max-h-[70vh]">
                            <div className="relative flex flex-col justify-center overflow-hidden">
                              <div className="w-full items-center mx-auto max-w-screen-lg">
                                <div className="group grid w-full grid-cols-1">
                                  <div className="relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4  before:bottom-0 before:left-0 before:rounded-lg  before:transition-all overflow-hidden">
                                    <div className="rounded-xl overflow-hidden">
                                      <Image
                                        src="/hero1.png"
                                        width={800}
                                        height={800}
                                        alt="s"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-4">
                                    <div className="overflow-y-auto">
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Simply Air Conditioning London are fixed
                                        system heating and air conditioning
                                        installation specialists. Because we’ve
                                        tested all heating and air conditioning
                                        unit manufacturers before using them
                                        there are no hidden surprises for our
                                        customers. We only supply air
                                        conditioning units from the leading
                                        manufacturers so any system we fit will
                                        be of the highest quality. We also
                                        thoroughly test every type of unit
                                        before supplying..
                                      </p>

                                      <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                        Conditioning installation packages
                                      </h3>
                                      <ul
                                        role="list"
                                        className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                                      >
                                        <li>
                                          5 cups chopped Porcini mushrooms
                                        </li>
                                        <li>1/2 cup of olive oil</li>
                                        <li>3lb of celery</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div className="group grid w-full grid-cols-1">
                                  <div className="mt-6">
                                    <div className="px-4 mb-4 mt-4 overflow-y-auto">
                                      <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                        Available Zones
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Bijrani, Dhela, Jhirna, Garjiya,
                                        Durgadevi, Phanto, Sitavani
                                      </p>

                                      <h3 className="font-semibold text-xl text-gray-400">
                                        Available Shifts
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        <b>Morning</b> (05:30 AM ‐ 09:30 AM )
                                        <br />
                                        <b>Afternoon</b> (01:30 PM ‐ 05:30 PM )
                                      </p>

                                      <h3 className="font-semibold text-xl text-gray-400">
                                        Attractions
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Floral Species, Fauna - Royal Bengal
                                        Tigers, Deers, Sambhar Deers, Cheetal,
                                        Leopards, Monitor Lizards, Crocodiles,
                                        Fishes, Marine Species, Reptiles,
                                        Snakes, Birds and More.
                                      </p>

                                      <h3 className="font-semibold text-xl text-gray-400">
                                        Restrictions
                                      </h3>
                                      <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                        Polythene Begs, No Smoking Area, No
                                        Alcohol, Foods, Noisy Stuffs.
                                      </p>
                                    </div>
                                  </div>

                                  <div className="relative inline-flex items-center flex-col before:block before:absolute before:h-1/6 before:w-4  before:bottom-0 before:left-0 before:rounded-lg  before:transition-all overflow-hidden">
                                    <div className="mt-10 text-black inline-flex justify-center">
                                      <span className="block font-semibold text-xl inline-flex">
                                        Enquiry
                                      </span>
                                    </div>
                                    <div className="overflow-hidden relative flex items-center min-h-60">
                                      <div className="relative inset-x-auto w-full z-10">
                                        <EnquiryForm/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </Button>
                <Button variant="enquiry" size="lg">
                  <Dialog>
                    <DialogTrigger className="inline-flex">
                      <EnvelopeOpenIcon />
                      <span className="px-2">Get Enquiry</span>
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
          </div>
          

          
        </div>

        <EnquiryForm />

        <div className="w-full h-full py-10">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Animals Pedia
      </h2>
      <Carousel items={cards} />
    </div>




        
      </section>

      
      
  );
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
              src = "/hero1.png"
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
    category: "",
    title: "Royal Bengal Tiger",
    src : "/hero1.png",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Asian Elephant",
    src : "/elephant.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Leopard",
    src : "/hero1.png",
    content: <DummyContent />,
  },
 
  {
    category: "",
    title: "Deers",
    src : "/sambhar.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Crocodile",
    src : "/crocodile.jpg",
    content: <DummyContent />,
  }
];