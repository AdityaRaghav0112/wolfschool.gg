import React from "react";
import GM from "../assets/gearModel.jpg";
import SM from "../assets/swordModel.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        src="/background2.mp4" // public folder file
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Content Over Video */}
      <div className="relative z-10 flex items-center justify-end mx-[15%] h-full">
        <div className="main-content flex flex-col gap-2 items-center text-center">
          <h1 className="text-red-800 text-[3vw] font-bold">
            Find the best build <br /> according to your playstyle
          </h1>
          <h3 className="text-white text-xl">
            Step into the world of The Witcher 3 like never before. Explore
            quests, characters, builds, <br /> and hidden secrets. Whether
            you're a new adventurer or a seasoned witcher, <br /> this is your
            ultimate companion through the Continent.
          </h3>
          <div className="mt-8 flex items-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-[#e03b3b] text-black font-semibold shadow-lg hover:scale-105 transition-transform">
              Find my build
            </button>
            <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg hover:scale-105 transition-transform">
              See featured build
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 items-center">
            {[
              { key: "combat", label: "Combat", icon: "⚔️" },
              { key: "signs", label: "Signs", icon: "✨" },
              { key: "alchemy", label: "Alchemy", icon: "🧪" },
              { key: "hybrid", label: "Hybrid", icon: "🌀" },
            ].map((p) => (
              <button
                key={p.key}
                className="flex items-center gap-2 px-4 py-2 bg-black border border-red-800/60 rounded-lg text-sm hover:bg-red-800 hover:text-black transition text-white duration-200"
              >
                <span className="text-base">{p.icon}</span>
                <span>{p.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

      <div className="other bg-black/98 flex h-screen items-center justify-around">
        <h1 className="text-5xl text-white font-bold">
          Find the best build <br />
          according to your playstyle
        </h1>
        <img src={GM} alt="" />
      </div>
      <div className="other bg-black/98 flex h-screen items-center justify-around">
        <img src={SM} className="h-200" alt="" />
        <h1 className="text-5xl text-white font-bold">
          Find the best Gear
          <br />
          according to your playstyle
        </h1>
      </div>
    </div>
  );
};

export default Hero;
