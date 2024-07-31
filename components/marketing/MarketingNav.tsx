import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import {
  ArrowDown,
  ArrowRight,
  Info,
  Menu,
  MenuIcon,
  Plus,
  Stars,
  Workflow,
} from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const number = "+213 0685 12 19 60";

const links = [
  {
    title: "services & prices",
    href: "/services-prices",
    icon: <Workflow size={20} />,
  },
  {
    title: "About",
    href: "/about",
    icon: <Info size={20} />,
  },
  {
    title: "reviews",
    href: "/reviews",
    icon: <Stars size={20} />,
  },
];

const MarketingNav = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between px-10 py-5 fixed top-0 w-full bg-background  border-b border-text-b">
        <a href="/" className="flex items-center gap-2 hover:opacity-75">
          <img className=" w-14" src="/brand/nicerlogo.png" />
          <div className=" text-3xl font-bold uppercase text-primary">
            Plantery
          </div>
        </a>
        <div className="flex items-center ">
          {links.map((item, i) => (
            <div key={i}>
              <Link
                href={item.href}
                className={buttonVariants({
                  variant: "link",
                })}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <div className=" cursor-default">{number}</div>
          <div>
            <Button className=" group" variant={"outline"} size={"lg"}>
              <div className="flex items-center gap-2">
                <div>Contact us</div>
                <div>
                  <Plus
                    className="mt-4 opacity-100 group-hover:opacity-0 group-hover:-mt-3 transition-all"
                    size={15}
                  />
                  <ArrowRight
                    className=" opacity-0 group-hover:opacity-100 transition-all"
                    size={15}
                  />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
      {/* --For Mobile-- */}
      <div className=" md:hidden bg-background flex items-center justify-between p-10 py-5 fixed top-0 w-full border-b border-b-text">
        <div>
          <img className="w-12" src="/brand/nicerlogo.png" alt="" />
        </div>
        <div>
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                className=" size-12 opacity-50"
                variant={"outline"}
                size={"icon"}
              >
                <MenuIcon size={30} />
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <div className=" p-10 py-2 h-full flex items-start  flex-col justify-between">
                <div className=" w-full">
                  <DrawerTitle className=" w-full">
                    <div className="flex items-center justify-between w-full">
                      <div>Menu</div>
                      <div>
                        <DrawerClose asChild>
                          <Button>Close</Button>
                        </DrawerClose>
                      </div>
                    </div>
                  </DrawerTitle>
                  <div className="mt-10">
                    {links.map((item, i) => {
                      return (
                        <div key={i}>
                          <Link
                            href={item.href}
                            className={buttonVariants({
                              variant: "link",
                              className: "px-0 text-xl",
                            })}
                          >
                            <div className=" flex items-center gap-5">
                              <div>{item.icon}</div>
                              <div>{item.title}</div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-5 pb-5">
                  <Button className=" group" variant={"outline"} size={"lg"}>
                    <div className="flex items-center gap-2">
                      <div>Contact us</div>
                      <div>
                        <Plus
                          className="mt-4 opacity-100 group-hover:opacity-0 group-hover:-mt-3 transition-all"
                          size={15}
                        />
                        <ArrowRight
                          className=" opacity-0 group-hover:opacity-100 transition-all"
                          size={15}
                        />
                      </div>
                    </div>
                  </Button>
                  <div className=" cursor-default text-sm">{number}</div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default MarketingNav;
