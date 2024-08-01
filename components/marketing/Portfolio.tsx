import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { gardenerPortfolio } from "@/lib/data/Works";
import {
  ArrowRight,
  Calendar,
  Clock,
  Locate,
  MapPin,
  Star,
} from "lucide-react";

const Portfolio = () => {
  return (
    <>
      <div className=" hidden md:block max-w-7xl mx-auto">
        <div className="mt-10 p-2">
          <div className=" grid grid-cols-6 ">
            <div className=" col-span-3 uppercase   font-black text-5xl max-w-6xl">
              Gardening projects we previously done
            </div>
            <div className=" col-span-3  pt-1 px-5">
              <div className="text-sm opacity-75 leading-tight ">
                Discover the transformative power of our gardening expertise
                through our impressive portfolio of completed projects. From
                meticulously crafted lawns to breathtaking floral displays,
                we've successfully executed a wide range of gardening endeavors.
                Our team of skilled professionals has honed their craft over
                years, delivering exceptional results that exceed expectations.
                Explore our gallery of past projects to witness the remarkable
                transformations we've achieved for our clients.
              </div>
              <div className="mt-5">
                <Link
                  href={"/"}
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                  })}
                >
                  <div className="flex items-center gap-2">
                    <div>See all projects ({gardenerPortfolio.length})</div>
                    <div>
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-5 mt-10">
            {gardenerPortfolio.slice(0, 4).map((item, i) => (
              <div key={i}>
                <PortfolioTemp
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  hours={item.hours}
                  location={item.location}
                  rating={item.rating}
                  image={item.image}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-2">
            <Link
              href={"/"}
              className={buttonVariants({
                variant: "link",
              })}
            >
              <div className="flex items-center gap-2">
                <div>See all ({gardenerPortfolio.length})</div>
                <div>
                  <ArrowRight size={15} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* for mobile  */}

      <div className=" md:hidden mt-10 p-2">
        <div className="text-5xl uppercase pl-2">
          Gardening <span className="text-primary">projects</span> we previously
          done
        </div>
        <div className="text-xs max-w-sm pl-2 opacity-75 leading-tight mt-3 ">
          Discover the transformative power of our gardening expertise through
          our impressive portfolio of completed projects. From meticulously
          crafted lawns to breathtaking floral displays, we've successfully
          executed a wide range of gardening endeavors. Our team of skilled
          professionals has honed their craft over years, delivering exceptional
          results that exceed expectations. Explore our gallery of past projects
          to witness the remarkable transformations we've achieved for our
          clients.
        </div>
        <div className="mt-2">
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "default",
              size: "lg",
            })}
          >
            <div className="flex items-center gap-2">
              <div>See all projects ({gardenerPortfolio.length})</div>
              <div>
                <ArrowRight size={15} />
              </div>
            </div>
          </Link>
        </div>
        <div className=" space-y-2 mt-5">
          {gardenerPortfolio.slice(0, 4).map((item, i) => (
            <div key={i}>
              <PortfolioTemp
                title={item.title}
                description={item.description}
                date={item.date}
                hours={item.hours}
                location={item.location}
                rating={item.rating}
                image={item.image}
              />
            </div>
          ))}
        </div>
        <div className="mt-2">
          <Link
            href={"/"}
            className={buttonVariants({
              variant: "link",
              size: "sm",
            })}
          >
            <div className="flex items-center gap-2">
              <div>See all projects ({gardenerPortfolio.length})</div>
              <div>
                <ArrowRight size={15} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

const PortfolioTemp = ({
  title,
  description,
  date,
  hours,
  location,
  rating,
  image,
}: {
  title: string;
  description: string;
  date: string;
  hours: number;
  location: string;
  rating: number;
  image: string;
}) => (
  <div className="p-5 bg-white">
    <div>
      <img className=" w-full h-[450px] object-cover" src={image} alt={title} />
    </div>
    <div className="mt-2 text-xl font-bold">{title}</div>
    <div className="text-sm opacity-75 max-w-md">{description}</div>
    <div className="opacity-75 flex items-center gap-2 mt-2">
      <div className="flex items-center gap-0.5 ">
        <div>
          <Clock size={15} />
        </div>
        <div className="text-xs">{hours}</div>
      </div>

      <div className="flex items-center gap-0.5 ">
        <div>
          <MapPin size={15} />
        </div>
        <div className="text-xs">{location}</div>
      </div>

      <div className="flex items-center gap-0.5 ">
        <div>
          <Calendar size={15} />
        </div>
        <div className="text-xs">{date}</div>
      </div>

      <div className="flex items-center gap-0.5 ">
        <div>
          <Star className=" fill-text" size={15} />
        </div>
        <div className="text-xs">{rating}/10</div>
      </div>
    </div>
  </div>
);

export default Portfolio;
