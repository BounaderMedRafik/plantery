import React from "react";
import TooltipReuseable from "../ui/TooltipReuseable";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";

const reviews = [
  {
    name: "Jhonathan heugo",
    rating: 9,
    image: "/people/3.jpg",
  },
  {
    name: "Sarah rome",
    rating: 10,
    image: "/people/1.jpg",
  },
  {
    name: "Manel Keddar",
    rating: 8,
    image: "/people/2.jpg",
  },
  {
    name: "Lamia jhonson",
    rating: 10,
    image: "/people/4.jpg",
  },
];

const Hero = () => {
  return (
    <>
      <div className="pt-48 px-4 hidden md:block">
        <div className=" grid grid-cols-6">
          <div className=" col-span-4 uppercase  md:text-7xl font-black lg:text-9xl">
            welcom to place where{" "}
            <span className=" text-primary">plants meets beuty</span>
          </div>
          <div className=" col-span-2 pt-3 px-5">
            <div className="text-3xl leading-tight">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              dicta ut temporibus culpa distinctio dolore odio maxime eos
              deserunt ab explicabo facilis, iste suscipit ipsam officia illo
              provident ipsa, officiis eveniet nesciunt? Praesentium, porro
              libero.
            </div>
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center">
                {reviews.map((item, i) => (
                  <div className=" -mr-3" key={i}>
                    <TooltipReuseable
                      content={
                        <div className="flex items-center gap-3">
                          <div>{item.name}</div>
                          <div className="flex items-center gap-0.5">
                            <div>
                              <Star size={15} className=" fill-text" />
                            </div>
                            <div className="text-xs mt-1">
                              {item.rating}/10{" "}
                            </div>
                          </div>
                        </div>
                      }
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-12 rounded-full object-cover border-2 border-background"
                      />
                    </TooltipReuseable>
                  </div>
                ))}
              </div>
              <div>
                <Button size={"lg"}>
                  <div className="flex items-center gap-2">
                    <div>+1,526 reviews</div>
                    <div>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/backgrounds/gardener.jpg"
            className="w-full h-[50vh] mt-10 object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
      {/* for mobile */}
      <div className=" md:hidden">hero phone</div>
    </>
  );
};

export default Hero;
