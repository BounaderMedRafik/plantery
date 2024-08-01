"use client";
import {
  gardenerServiceCategories,
  gardenerServices,
} from "@/lib/data/Services";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const OurServices = () => {
  return (
    <div className="mt-10 p-2">
      <div className=" grid grid-cols-6 ">
        <div className=" col-span-3 uppercase  md:text-6xl font-black lg:text-8xl max-w-6xl">
          Our Gardening services we provide
        </div>
        <div className=" col-span-3 pt-3 px-5">
          <div className="text-xl leading-tight ">
            Our team of experienced gardeners offers a comprehensive range of
            services to transform your outdoor space into a thriving oasis. From
            meticulous lawn care and expert planting to creative garden design
            and meticulous maintenance, we provide tailored solutions to meet
            your specific needs. We are committed to delivering exceptional
            service and creating stunning outdoor environments that enhance your
            property's beauty and value.
          </div>
        </div>
      </div>
      <div>
        <LosServisoc />
      </div>
    </div>
  );
};

const LosServisoc = () => {
  const [category, setCategory] = useState("All");

  const filteredServices =
    category === "All"
      ? gardenerServices
      : gardenerServices.filter((service) => service.category === category);

  return (
    <Carousel>
      <div className="mt-4">
        <div className="grid grid-cols-6">
          <div className="col-span-4 flex items-center gap-0.5">
            {gardenerServiceCategories.map((item, i) => (
              <div key={i}>
                <Button
                  onClick={() => setCategory(item)}
                  variant={item === category ? "default" : "outline"}
                  size={"lg"}
                >
                  {item}
                </Button>
              </div>
            ))}
          </div>
          <div className="col-span-2 flex justify-center items-center gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <CarouselContent className="flex items-center">
          {filteredServices.map((item, i) => (
            <div key={i}>
              <CarouselItem className="w-96">
                <ServiceTemp
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
      </div>
    </Carousel>
  );
};

const ServiceTemp = ({
  category,
  title,
  description,
  image,
  price,
}: {
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
}) => {
  return (
    <div className=" w-full">
      <div>
        <img className=" w-full h-96 object-cover" src={image} alt={title} />
      </div>
      <div className="mt-2">
        <div className="text-xl font-bold line-clamp-1">{title}</div>
        <div className="text-base  opacity-75 line-clamp-1  ">
          {description}
        </div>
        <div className="mt-3  text-sm">{price}$/hour</div>
      </div>
    </div>
  );
};

export default OurServices;
