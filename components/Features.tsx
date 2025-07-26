import React from "react";

import Bounded from "@/components/Bounded";

const Features = () => {
  return (
    <section className="bg-gray-100">
      <Bounded>
        <h3 className="font-rubik-sans capitalize text-3xl lg:text-4xl xl:text-5xl">
          Key Features
        </h3>
        <p className="text-custom-subtext">Why you&apos;ll love this journal</p>

        <div className="min-h-screen mt-12">
          <div className="flex size-full flex-col gap-6 justify-between">
            <div className="flex-1 bg-black/9 h-[33vh] rounded-xl p-4 flex-col flex items-end justify-end">
              <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                ✏️ Rich Text Editor
              </span>
              <p className="text-custom-subtext">
                A beautiful, distraction-free space to write.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 h-[33vh]">
              <div className="flex-1 bg-green-400 rounded-xl p-4 flex-col flex items-end justify-end">
                <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                  🤖 Smart Ai Summaries
                </span>
                <p className="text-custom-subtext">
                  Instant insights, reflections, affirmations.
                </p>
              </div>
              <div className="flex-1 bg-yellow-300 rounded-xl p-4 flex-col flex items-end justify-end">
                <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                  📊 Mood Tracker
                </span>
                <p className="text-custom-subtext">
                  See how you’re feeling over time.
                </p>
              </div>
              <div className="flex-1 bg-pink-500 rounded-xl p-4 flex-col flex items-end justify-end">
                <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                  🔒 Private & Secure
                </span>
                <p className="text-custom-subtext">Only you have access</p>
              </div>
            </div>
            <div className="flex-1 bg-blue-400 h-[33vh] rounded-xl p-4 flex-col flex items-end justify-end">
              <span className="text-2xl font-semibold font-rubik-sans text-custom-main-text">
                📆 Daily Streaks
              </span>
              <p className="text-custom-subtext">
                Stay motivated, one day at a time.
              </p>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Features;
