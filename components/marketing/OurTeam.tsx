import { Team } from "@/lib/data/Team";
import { User } from "lucide-react";
import React from "react";

const OurTeam = () => {
  return (
    <div className="mt-52">
      <div className="max-w-7xl mx-auto">
        <div className="     uppercase text-center max-w-7xl text-4xl mx-5  md:text-6xl font-black lg:text-7xl ">
          Only the best <span className="text-primary">gardeners</span>{" "}
          available in country
        </div>
        <div className=" grid grid-cols-2 md:flex gap-y-7 md:items-center md:justify-center mt-5 gap-0.5">
          {Team.map((item, i) => (
            <div
              className="flex items-center flex-col justify-center gap-3"
              key={i}
            >
              <div className=" size-32 md:size-52 relative ">
                <img
                  className=" rounded-full  h-full w-full object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className=" px-4 py-1 border-2 border-background rounded-full text-sm bg-primary text-background absolute right-0 bottom-4">
                  {item.Years} years
                </div>
              </div>
              <div>{item.name}</div>
            </div>
          ))}

          <div className="flex items-center justify-center col-span-2">
            <div className=" size-32 md:size-52 bg-text text-background rounded-full flex flex-col items-center justify-center">
              <User size={32} />
              <div className="text-xs text-center w-[80%]">
                And many other gardeners near your location
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
