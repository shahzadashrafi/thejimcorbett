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
export default function JimCorbettSafari() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <section className="home-header">
      <div className="grid grid-col-1 md:grid-cols-2 md:space-x-4">
        <div className="sm:mt-40 relative w-full md:mb-0 overflow-hidden hover:text-white hover:opacity-80 hover:rounded">
          <AspectRatio ratio={4 / 4} className="bg-none">
            <Image
              src="/tiger3.jpg"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-xl object-cover"
            />
          </AspectRatio>
          
        </div>
        <div className="relative w-full mb-10 md:mb-0 overflow-hidden hover:text-white hover:opacity-80 hover:rounded">
            <h1 className="text-4xl m-5 font-extrabold tracking-tight text-white-900 text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                      <span className="block xl:inline">Corbett Park</span>
                      <span className="block text-white xl:inline"> Night Stays..</span>
                  </h1>


                  <div className="px-4">
                                  <div className="overflow-y-auto">
                                  <h3 className="mb-4 font-semibold text-2xl text-white-400">
                                  Dhikala Forest Rest House                                  </h3>
                                    <p className="peer mt-4 mb-4 text-xl text-gray-400 overflow-y-auto">
                                    The Dhikala Forest Rest House is perhaps the most sought-after accommodation in Corbett. Located in the Dhikala Zone, it provides breathtaking views of the grasslands and is renowned for wildlife sightings, including tigers and elephants. With 28 double-bed rooms and a dormitory, it caters to both families and solo travelers. Staying here allows guests to embark on early morning and late evening safaris, maximizing their wildlife experiences.

</p>
                                    <h3 className="mb-4 font-semibold text-2xl text-white-400">
                                    Gairal Rest House</h3>
                                    <p className="peer mt-4 mb-4 text-xl text-gray-400 overflow-y-auto">
                                    The Gairal Rest House is situated near the Gairal Crocodile Point, offering a tranquil environment perfect for nature lovers. It features comfortable accommodation and easy access to the river, where visitors can spot crocodiles and a variety of bird species. This rest house is ideal for those seeking peace and quiet, combined with the thrill of wildlife observation.
                                    </p>

                                    <h3 className="mb-4 font-semibold text-2xl text-white-400">
                                    Bijrani Forest Rest House</h3>
                                    <p className="peer mt-4 mb-4 text-xl text-gray-400 overflow-y-auto">
                                    Located in the Bijrani Zone, the Bijrani Forest Rest House is known for its vibrant wildlife and lush surroundings. This area is rich in biodiversity, making it a popular choice for birdwatchers and wildlife enthusiasts. The rest house offers a comfortable stay with access to exciting safari routes that promise unforgettable encounters with wildlife.

</p>

                                    <h3 className="mb-4 font-semibold text-2xl text-white-400">
                                    Jhirna Rest House</h3>
                                    <p className="peer mt-4 mb-4 text-xl text-gray-400 overflow-y-auto">
                                    The Jhirna Rest House is open year-round and is situated in the Jhirna Zone, famous for its open grasslands and dense forests. This accommodation option is ideal for those who want to explore the park during the monsoon season when wildlife is particularly active. The rest house provides basic amenities while allowing guests to immerse themselves in the wilderness.

</p>

                                   
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