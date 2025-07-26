"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import Bounded from "@/components/Bounded";
import { Button } from "./ui/button";
import How from "./How";
import { HowItWorks } from "@/constants";
import Features from "./Features";

const Hero = () => {
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const howContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".videoDiv", {
        y: -300,
        borderRadius: 44,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".videoDiv",
          start: "top 70%",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".how", {
        y: 0,
        opacity: 1,
        stagger: 0.35,
        ease: "expo.in",
        scrollTrigger: {
          trigger: howContainerRef.current,
          start: "top 70%",
          end: "bottom top",
        },
      });
    },
    { scope: heroContainerRef }
  );

  return (
    <>
      <Bounded className="relative" ref={heroContainerRef}>
        <section className="min-h-[80vh] flex-center flex-col">
          <h1 className="text-3xl lg:text-4xl xl:text-8xl tracking-wide font-rubik-sans text-custom-main-text">
            Write Freely. Reflect Deeply.
          </h1>
          <p className="text-base lg:text-lg xl:text-xl text-custom-subtext">
            A private AI-powered journal that understands you, helps you
            reflect, and keeps your thoughts safe.
          </p>
          <Button className="bg-primary-button cursor-pointer hover:bg-primary-button mt-12">
            Start Journaling Free →
          </Button>
        </section>

        <div className="relative h-[80vh] videoDiv overflow-hidden">
          <Image
            src={"/images/test.jpg"}
            alt="test"
            fill
            className="object-cover"
          />
        </div>

        <section className="h-fit" ref={howContainerRef}>
          <h2 className="font-rubik-sans capitalize text-3xl lg:text-4xl xl:text-5xl">
            how it works?
          </h2>
          <p className="text-custom-subtext">
            It is this simple to get started and write your first note
          </p>
          <div className="mt-12 space-y-6">
            {HowItWorks.map((how) => (
              <How
                key={how.index}
                {...how}
                className="how translate-y-12 opacity-0"
              />
            ))}
          </div>
        </section>
      </Bounded>
      <Features />
    </>
  );
};

export default Hero;
