import { Divide, DollarSign, Smile, Verified } from "lucide-react";
import React from "react";
import TooltipReuseable from "../ui/TooltipReuseable";

const smolStuff = [
  {
    name: "TrustWorthy",
    icon: <Verified size={24} />,
  },
  {
    name: "Nice Experience",
    icon: <Smile size={24} />,
  },
  {
    name: "Reasonable prices",
    icon: <DollarSign size={24} />,
  },
];

const Banner = () => {
  return (
    <>
      <div className=" bg-primary">
        <div className="mt-24 max-w-7xl mx-auto hidden  relative p-3 md:flex  h-[60vh] items-center justify-between">
          <div className="text-background h-full  relative">
            <div className="text-5xl  max-w-lg    h-full flex flex-col items-center justify-between  font-bold">
              <div className="uppercase">
                Trustufull agency to hire a garden
              </div>
              <div className="text-lg font-normal">
                Are you seeking to transform your outdoor space into a lush
                oasis? Look no further than our trustworthy agency. We
                specialize in connecting homeowners with skilled and experienced
                gardeners who can bring your garden vision to life. With a
                commitment to quality and customer satisfaction, we are your
                reliable partner in achieving the garden you've always dreamed
                of.
              </div>
            </div>
          </div>
          <img src="/people/womanpicture.svg" alt="" />
          <div className=" absolute right-10 bottom-10 flex items-center gap-1">
            {smolStuff.map((item, i) => (
              <TooltipReuseable content={<div>{item.name}</div>}>
                <div
                  className=" size-28 text-background bg-background/60 rounded-full backdrop-blur-md flex items-center justify-center"
                  key={i}
                >
                  {item.icon}
                </div>
              </TooltipReuseable>
            ))}
          </div>
        </div>
      </div>

      {/* for moble  */}

      <div className="md:hidden bg-primary p-3 text-background">
        <div className="uppercase text-4xl font-bold">
          Trustufull agency to hire a garden
        </div>
        <div className=" max-w-md mx-auto h-px w-full my-2 bg-background" />
        <div className="text-lg font-normal mt-2">
          Are you seeking to transform your outdoor space into a lush oasis?
          Look no further than our trustworthy agency. We specialize in
          connecting homeowners with skilled and experienced gardeners who can
          bring your garden vision to life. With a commitment to quality and
          customer satisfaction, we are your reliable partner in achieving the
          garden you've always dreamed of.
        </div>
        <div className="mt-5">
          <img className="w-full" src="/people/womanpicture.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
