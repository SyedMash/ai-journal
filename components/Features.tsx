"use client";

import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import Bounded from "@/components/Bounded";

const Features = () => {
  const featureRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".boxes", {
        y: 0,
        opacity: 1,
        ease: "expo.in",
        stagger: 0.45,
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 80%",
          end: "bottom top",
          markers: true,
        },
      });
    },
    { scope: featureRef }
  );

  return (
    <section className="min-h-screen" ref={featureRef}>
      <Bounded>
        <h3 className="font-rubik-sans capitalize text-3xl lg:text-4xl xl:text-5xl">
          Key Features
        </h3>
        <p className="text-custom-subtext">Why you&apos;ll love this journal</p>

        <div className="h-screen lg:h-screen mt-12">
          <div className="flex flex-col gap-6 h-full w-full justify-between">
            <div className="flex-1 bg-red-600 h-2/4 rounded-xl p-4 flex-col flex items-end justify-end boxes translate-y-12 opacity-0">
              <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                ✏️ Rich Text Editor
              </span>
              <p className="text-custom-subtext">
                A beautiful, distraction-free space to write.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 h-2/4">
              <div className="flex-1 bg-green-400 rounded-xl p-4 flex-col flex items-end justify-end boxes translate-y-12 opacity-0">
                <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                  🤖 Smart Ai Summaries
                </span>
                <p className="text-custom-subtext">
                  Instant insights, reflections, affirmations.
                </p>
              </div>
              <div className="flex-1 bg-yellow-300 rounded-xl p-4 flex-col flex items-end justify-end boxes translate-y-12 opacity-0">
                <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                  📊 Mood Tracker
                </span>
                <p className="text-custom-subtext">
                  See how you’re feeling over time.
                </p>
              </div>
              <div className="flex-1 bg-pink-500 rounded-xl p-4 flex-col flex items-end justify-end boxes translate-y-12 opacity-0">
                <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                  🔒 Private & Secure
                </span>
                <p className="text-custom-subtext">Only you have access</p>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Features;
