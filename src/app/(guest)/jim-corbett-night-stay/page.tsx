import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
  import Image from "next/image"

  import { AspectRatio } from "@/components/ui/aspect-ratio"
  
export default function CorbettSafari() {
    return (
        <div className="grid grid-col-1 md:grid-cols-2">
        <div className="relative w-full mb-10 md:mb-0 overflow-hidden hover:bg-slate-900 hover:text-white hover:opacity-80 hover:rounded">
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div className="w-[450px]">
                        <AspectRatio ratio={9 / 9}>
                            <Image  
                                src="/hero1.png"
                                alt="Photo by Drew Beamer"
                                fill
                                className="rounded-md object-cover"
                             />
                        </AspectRatio>
                    </div>

                </CarouselItem>
                <CarouselItem>
                <CarouselItem>
                    <div className="w-[450px]">
                        <AspectRatio ratio={9 / 9}>
                            <Image  
                                src="/hero1.png"
                                alt="Photo by Drew Beamer"
                                fill
                                className="rounded-md object-cover"
                             />
                        </AspectRatio>
                    </div>

                </CarouselItem>
                </CarouselItem>
                <CarouselItem>
                <CarouselItem>
                    <div className="w-[450px]">
                        <AspectRatio ratio={9 / 9}>
                            <Image  
                                src="/hero1.png"
                                alt="Photo by Drew Beamer"
                                fill
                                className="rounded-md object-cover"
                             />
                        </AspectRatio>
                    </div>

                </CarouselItem>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
        <div>shahzad</div>
        </div>
    )
}