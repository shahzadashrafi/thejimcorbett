'use client';
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
import { EnvelopeOpenIcon, EyeOpenIcon, } from "@radix-ui/react-icons";
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
      <div className="grid grid-col-1 md:grid-cols-2 md:space-x-4">
        <div className="relative w-full md:mb-0 overflow-hidden hover:bg-slate-900 hover:text-white hover:opacity-80 hover:rounded">
          <AspectRatio ratio={4 / 4} className="bg-none">
            <Image
              src="/tiger3.jpg"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div className="relative bottom-0 left-0 w-full px-6 py-2">
            <h1 className="max-w-7xl text-center pl-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-5">
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
                                      src="/crocodile.jpg"
                                      width={800}
                                      height={800}
                                      alt="s"
                                    />
                                  </div>
                                </div>
                                <div className="px-4">
                                  <div className="overflow-y-auto">
                                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                  Overview of Jim Corbett Day Visit
                                  </h3>
                                    <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                    A day visit to Jim Corbett National Park is an unforgettable experience for nature and wildlife enthusiasts. Established in 1936, Corbett is India’s oldest national park and is known for its rich biodiversity, dense forests, and the famed Bengal tiger. Visitors on a day trip can experience the beauty of the park’s flora and fauna through well-organized safaris. Whether you’re looking for a quick escape into nature or a chance to spot wildlife, a day visit to Corbett offers an adventure-filled excursion.
                                    </p>
                                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                    Jungle Safari in Corbett National Park
</h3>
                                    <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                    One of the main highlights of a Jim Corbett day visit is the Corbett Safari, a thrilling way to explore the park’s diverse landscapes and wildlife. The park offers both jeep safaris and canter safaris, which take visitors deep into various zones of the park, such as Dhikala, Bijrani, and Jhirna. These safaris give you the opportunity to spot majestic Bengal tigers, leopards, elephants, deer, and a variety of bird species.

The Corbett Safari also allows visitors to experience the park's beautiful riverine landscapes, grasslands, and hilly terrain, making it a great option for wildlife photography. With the help of expert guides, your chances of spotting iconic wildlife species increase, turning a day visit into a thrilling and educational adventure.                                    </p>
                                    
                                    <ul
                                      role="list"
                                      className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                                    >
                                      <li>
                                        Upto 4 Hours Journey
                                      </li>
                                      <li>Max People : 6 plus 2 Children less than 12 years</li>
                                      
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
                                      <b>Morning</b> (05:30 AM ‐ 09:30 AM ) (May be changed according to weather)
                                      <br />
                                      <b>Afternoon</b> (01:30 PM ‐ 05:30 PM ) (May be changed according to weather)
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
              src="/elephant.jpg"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div className="relative bottom-0 left-0 w-full px-6 py-2">
            <h1 className="max-w-7xl text-center pl-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-5">
              Jim Corbett Night Stay
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
                      <DialogTitle>Jim Corbett Night Stay</DialogTitle>
                      <DialogDescription>
                        <div className="my-5 overflow-y-auto max-h-[70vh]">
                          <div className="relative flex flex-col justify-center overflow-hidden">
                            <div className="w-full items-center mx-auto max-w-screen-lg">
                              <div className="group grid w-full grid-cols-1">
                                <div className="relative flex items-end flex-col before:block before:absolute before:h-1/6 before:w-4  before:bottom-0 before:left-0 before:rounded-lg  before:transition-all overflow-hidden">
                                  <div className="rounded-xl overflow-hidden">
                                    <Image
                                      src="/crocodile.jpg"
                                      width={800}
                                      height={800}
                                      alt="s"
                                    />
                                  </div>
                                </div>
                                <div className="px-4">
                                  <div className="overflow-y-auto">
                                  <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                  Overview of Jim Corbett Night Stay
                                    </h3>
                                    <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                    A Jim Corbett Night Stay is the ultimate way to experience the raw wilderness of Corbett National Park. The Dhikala zone, Bijrani, Dhela and Jhirna located in the core area of the park, are known for its rich wildlife, stunning landscapes, and proximity to the Ramganga River. A Night Stay offers a unique opportunity to stay deep within the forest, where you can hear the sounds of nature and witness nocturnal wildlife activities. Staying in Dhikala enhances your chances of spotting the Bengal tiger, elephants, and other wildlife, making it a must-visit for any wildlife enthusiast.
                                    </p>
                                    <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                  Jungle Safari during Night Stay Accommodation
                                    </h3>
                                    <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                    The highlight of a Corbett Night Stay is the Corbett Safari, which allows you to explore the best zones of Corbett National Park. Dhikala and Bijrani is particularly known for its vast grasslands, riverine habitats, and dense forests, offering one of the most scenic safari experiences in India. The early morning and late afternoon safaris increase your chances of seeing Bengal tigers, leopards, wild elephants, and various species of deer. Apart from Dhikala and Bijrani, you can also explore other zones like Jhirna, Dhela and Durgadevi, each offering diverse landscapes and unique wildlife sightings.
                                      Dhikala stands out due to its exclusive location within the core zone, which is accessible only to visitors staying in the forest lodge. This restricted access means fewer tourists, enhancing the chances of an intimate wildlife experience. Expert guides and drivers accompany you on the safari, ensuring you get to see the best of Corbett's flora and fauna.                                    </p>
                                    
                                      <h3 className="mb-4 font-semibold text-xl text-gray-400">
                                      Accommodation in Dhikala, Bijrani and Other Corbett National Park Zones
                                      </h3>
                                    <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                    Accommodation within the Forest Zone is rustic but comfortable, designed to keep you close to nature. The forest rest house offers basic amenities but provides the unparalleled experience of staying inside the core area of the park. At night, you can enjoy the thrill of being surrounded by the jungle, listening to the calls of the wild while staying in safe and secure lodges. The forest lodges are simple but clean, with electricity provided for a limited time.

If you prefer more luxurious options, there are eco-friendly resorts and hotels located near the other zones of Corbett National Park. Bijrani and Jhirna offer comfortable lodges and resorts with modern amenities, but for the most authentic experience, the Corbett Night Stay is unmatched. The night stay inside Corbett National Park allows you to embark on early morning safaris without the need for long commutes, giving you a head start to explore the jungle when the wildlife is most active. </p>
                                    <ul
                                      role="list"
                                      className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500"
                                    >
                                      <li>
                                        Complementary 2 Jungle Safaris with 1 night stay inside the park. 
                                      </li>
                                      <li>Doormetries in hall available for families</li>
                                      <li>Maximum 6 Persons allowed in a Gypsy</li>
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
                                      Dhikala, Bijrani, Dhela, Jhirna 
                                      
                                    </p>

                                    <h3 className="font-semibold text-xl text-gray-400">
                                      Check In / Check Out
                                    </h3>
                                    <p className="peer mt-4 mb-4 text-gray-400 content-center overflow-y-auto">
                                      <b>Check-in</b> 12:00 PM (Afternoon)
                                      <br />
                                      <b>Check-out</b> 11:00 AM 
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

const RoyalBengalTigerContent: any = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"royal-bengal-tiger-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Overview of the Royal Bengal Tiger-</h3>
            <br/>
            <Image
              src="/tiger2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="h-full w-full mx-auto object-contain"
            />
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
              The Royal Bengal Tiger, one of the most majestic and powerful creatures, is an iconic symbol of India’s wildlife. Known for its striking orange coat with black stripes, the Bengal tiger is not only a predator but also plays a crucial role in maintaining the balance of ecosystems. These big cats are highly sought after by wildlife enthusiasts, particularly in their natural habitats such as national parks across India.
            </p>

            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Bengal Tiger Availability in Corbett National Park-</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park, located in Uttarakhand, is one of the best places in India for spotting the Royal Bengal Tiger. It boasts a rich population of tigers, making it a popular destination for wildlife enthusiasts and photographers. The park’s dense forests, open grasslands, and riverine areas provide the perfect environment for tigers to thrive. Visitors can frequently spot tigers during Corbett safari tours, especially in zones like Dhikala and Bijrani, which are known for high tiger activity.
            </p>
            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Why Corbett Park is Best for Sighting the Royal Bengal Tiger?</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park is renowned for offering the best tiger sighting experiences. With its well-maintained safari routes, expert guides, and diverse tiger habitats, a Corbett safari promises an exciting and unforgettable experience. Tiger sighting in Corbett Park is further enhanced by the park’s conservation efforts, ensuring a healthy and thriving tiger population.
            </p>

            
            
          </div>
        );
      })}
    </>
  );
};


const AsianElephantContent: any = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"asian-elephant-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Overview of the Asian Elephant-</h3>
            <br/>
            <Image
              src="/elephant2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="h-full w-full mx-auto object-contain"
            />
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            The Asian Elephant, a keystone species in the forests of Asia, is known for its intelligence, social behavior, and cultural significance. Unlike their African counterparts, Asian Elephants have smaller ears and are slightly smaller in size. These gentle giants play a critical role in maintaining forest ecosystems by aiding seed dispersal and influencing the vegetation structure. Despite being endangered due to habitat loss and human-wildlife conflict, Asian Elephants are well-protected in reserves like Corbett National Park.
            </p>

            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Asian Elephant Availability in Corbett National Park-</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park is not only known for its tiger population but also for being a haven for Asian Elephants. The park is home to large elephant herds that roam freely across its diverse landscapes. During a Corbett safari, visitors often encounter these magnificent creatures along forest trails, riverbeds, and grasslands. The Ramganga River and Dhikala Zone are popular spots for elephant sightings in Corbett Park, where these animals frequently gather to drink and socialize.</p>
            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Why Corbett Park is Best for Sighting the Asian Elephant?</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park is one of the premier destinations in India for elephant sighting. The park’s well-maintained safari zones, knowledgeable guides, and varied terrain make it ideal for spotting elephants in their natural habitat. The conservation efforts in the park ensure that Asian Elephants are well-protected, making Corbett safari tours highly rewarding for wildlife enthusiasts. Visitors can enjoy the rare experience of observing elephant families up close while exploring the rich biodiversity of Corbett Park.</p>
            
          </div>
        );
      })}
    </>
  );
};

const DeersContent: any = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"deers-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Overview of Deer Species in Corbett National Park-</h3>
            <br/>
            <Image
              src="/elephant2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="h-full w-full mx-auto object-contain"
            />
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park, one of India's most renowned wildlife reserves, is home to a variety of deer species, each adding to the park’s rich biodiversity. Four prominent types of deer found in Corbett include the Hawk Deer, Spotted Deer (Chital), Sambar Deer, and Barking Deer. These herbivorous animals play an essential role in the food chain, supporting the park’s predators such as tigers and leopards. Their presence makes Corbett National Park a prime destination for wildlife enthusiasts and photographers.
            </p>

            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Deer Species Availability in Corbett National Park-</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            <b className="text-white">Hawk Deer: </b> Though lesser-known, Hawk Deer can be spotted in the dense forests of Corbett. Their elusive nature and preference for wooded areas make sightings rare but rewarding during a Corbett Safari.
            <br/><b  className="text-white">Spotted Deer (Chital): </b> One of the most commonly seen deer species in Corbett Park, Spotted Deer are known for their beautiful white spots and are often found grazing in grasslands and riverbanks. Their large numbers make them a frequent sight during safaris.
            <br/><b  className="text-white">Sambar Deer:</b> The largest of the deer species in Corbett, Sambar Deer are recognized by their sturdy build and majestic antlers. They prefer dense forests but can also be seen near water bodies during the early mornings and late evenings.
            <br/><b  className="text-white">Barking Deer:</b> Named for their dog-like bark, Barking Deer are shy and solitary creatures. Although small in size, they are an intriguing species for visitors hoping to catch a glimpse of them in Corbett’s quieter zones.
            </p>
            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Why Corbett Park is Best for Sighting Deer Species?</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park offers unparalleled opportunities to witness a variety of deer species in their natural environment. The park’s vast expanse of forests, grasslands, and riverine ecosystems provides the perfect habitat for these deer. A Corbett safari allows visitors to explore the zones where each deer species thrives, increasing the chances of spotting them. Additionally, the park’s well-regulated safaris, knowledgeable guides, and rich biodiversity make it a top destination for deer sightings. Whether you're observing the elegant Spotted Deer or the elusive Barking Deer, Corbett provides an immersive wildlife experience.
            </p>
          </div>
        );
      })}
    </>
  );
};


const LeopardContent: any = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"leopard-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Overview of the Leopard-</h3>
            <br/>
            <Image
              src="/elephant2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="h-full w-full mx-auto object-contain"
            />
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            The Leopard is one of the most elusive and agile big cats in the wild, known for its incredible adaptability and stealth. Its sleek golden coat with black rosettes not only gives it a striking appearance but also helps it blend seamlessly into its surroundings. Leopards are known for their remarkable hunting skills, climbing prowess, and solitary behavior. Found across various landscapes, they are among the top predators in India’s wildlife reserves, including the famous Corbett National Park.</p>

            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Leopard Availability in Corbett National Park-</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park, while renowned for its tiger population, is also home to a significant number of leopards. Leopards in Corbett are often found in hilly terrains, dense forests, and rocky areas, where their camouflage abilities are most effective. The Dhikala and Bijrani zones are particularly noted for sightings of leopards in Corbett Park, as these zones feature a combination of grasslands and thick forest cover, providing the perfect environment for these cats to hunt and thrive. Although they are more elusive than tigers, a Corbett Safari can offer wildlife enthusiasts the exciting opportunity to catch a glimpse of these magnificent animals.</p>
            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Why Corbett Park is Best for Sighting the Leopards?</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park is one of the top destinations for leopard sightings due to its diverse landscape, which includes dense jungles, rocky hills, and open meadows that suit the leopard’s habits. The park’s expert guides and well-planned safari routes maximize the chances of spotting this elusive predator. Corbett’s conservation efforts also ensure a balanced prey-predator ratio, allowing leopards to thrive alongside other wildlife. While tiger sightings may be more common, the thrill of spotting a leopard in Corbett Park during a safari is unmatched, making it a must-visit destination for wildlife enthusiasts looking for a complete big cat experience.
            </p>





            
          </div>
        );
      })}
    </>
  );
};


const CrocodileContent: any = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"crocodile-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Overview of the Crocodile-</h3>
            <br/>
            <Image
              src="/elephant2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="h-full w-full mx-auto object-contain"
            />
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Crocodiles are ancient reptiles, known for their powerful build, sharp teeth, and remarkable survival skills. These aquatic predators have existed for millions of years and are often found in rivers, lakes, and marshy areas. They are highly adaptive and play a vital role in maintaining the balance of aquatic ecosystems. India is home to two major species of crocodiles – the Mugger and the Gharial, both of which can be found in Corbett National Park.
            </p>

            <br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Crocodile Availability in Corbett National Park-</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park is not only famous for its Bengal tigers and leopards but also for its thriving population of crocodiles. The park’s river systems, particularly the Ramganga River and its tributaries, provide an ideal habitat for both Mugger crocodiles and Gharials. These water bodies offer ample prey and a perfect environment for these reptiles to bask, hunt, and breed. During a Corbett safari, visitors often encounter crocodiles sunbathing along the riverbanks or swimming in the calm waters. The Ramganga River and its reservoir areas are the best spots for crocodile sightings in Corbett Park.
            </p><br/>
            <h3 className="font-bold text-3xl text-neutral-700 dark:text-neutral-200">Why Corbett Park is Best for Sighting the Crocodiles?</h3>
            <br/>
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl">
            Corbett National Park offers excellent opportunities for spotting crocodiles due to its extensive water bodies and well-protected aquatic habitats. A Corbett Safari through zones like Dhikala and Jhirna, which are close to the Ramganga River, enhances the chances of seeing these reptiles in their natural surroundings. Corbett’s rich biodiversity and strategic safari routes make it one of the top destinations for observing crocodiles up close. The park’s conservation efforts also ensure a thriving crocodile population, making Corbett National Park a must-visit for wildlife enthusiasts seeking a complete and diverse wildlife experience.
            </p>





            
          </div>
        );
      })}
    </>
  );
};

//APPLE CAROUSEL CARD VIEW DATA

const data = [
  {
    category: "",
    title: "Royal Bengal Tiger",
    src: "/tiger1.jpg",
    content: <RoyalBengalTigerContent />,
  },
  {
    category: "",
    title: "Asian Elephant",
    src: "/elephant5.jpg",
    content: <AsianElephantContent />,
  },
  {
    category: "",
    title: "Leopard",
    src: "/hero1.png",
    content: <LeopardContent />,
  },

  {
    category: "",
    title: "Deers",
    src: "/sambhar.jpg",
    content: <DeersContent />,
  },
  {
    category: "",
    title: "Crocodile",
    src: "/crocodile.jpg",
    content: <CrocodileContent />,
  }
];