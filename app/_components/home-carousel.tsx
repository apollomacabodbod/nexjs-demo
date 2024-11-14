import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm relative" // Make parent relative
    >
      <CarouselContent className="flex gap-[3em] mx-[0em]  border border-[#50B498] green">


        <div className="p-4 w-[400px] border border-[#50B498] green">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between ">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Card Title 1</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors whitespace-nowrap">Learn More</button>
          </div>
        </div>



        <div className="p-4 w-[400px] border border-[#50B498] green">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between ">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Card Title 1</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors whitespace-nowrap">Learn More</button>
          </div>
        </div>


        <div className="p-4 w-[400px] border border-[#50B498] green">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between ">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Card Title 1</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors whitespace-nowrap">Learn More</button>
          </div>
        </div>



        <div className="p-4 w-[400px] border border-[#50B498] green">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between ">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Card Title 1</h3>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors whitespace-nowrap">Learn More</button>
          </div>
        </div>


      </CarouselContent>
      
      {/* Previous Button */}
      <CarouselPrevious className="absolute left-[0em] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-800">
        &#8249; {/* Left arrow icon */}
      </CarouselPrevious>
      
      {/* Next Button */}
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-800">
        &#8250; {/* Right arrow icon */}
      </CarouselNext>
    </Carousel>
  )
}
