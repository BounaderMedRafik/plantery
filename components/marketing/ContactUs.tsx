import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="pt-24 max-w-7xl mx-auto">
      <div className="text-8xl uppercase font-bold">
        Fill out the form to{" "}
        <span className="text-primary">reach our team</span>
      </div>
      <div>
        <TheBeutifulForm />
      </div>
    </div>
  );
};

const TheBeutifulForm = () => {
  return (
    <div className=" grid grid-cols-2 gap-10 mt-3">
      <div>
        <Label className=" opacity-75 font-SF">Your First Name</Label>
        <Input placeholder="Med Rafik" />
      </div>
      <div>
        <Label className=" opacity-75 font-SF">Your Last Name</Label>
        <Input placeholder="Med Rafik" />
      </div>
      <div>
        <Label className=" opacity-75 font-SF">Your Phone Number</Label>
        <div className="relative">
          <Input className="pl-14" placeholder="6559 78 45 98" />
          <div className=" absolute top-1/2 -translate-y-1/2 font-bold cursor-default">
            +213
          </div>
        </div>
      </div>
      <div>
        <Label className=" opacity-75 font-SF">Your Email Adress</Label>
        <Input placeholder="mohamedrafikbounader@gmail.com" />
      </div>
      <div className=" flex items-center justify-end col-span-2">
        <Button size={"lg"}>
          <div className="flex items-center gap-2">
            <div>Submit</div>
            <div>
              <ArrowRight size={15} />
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
