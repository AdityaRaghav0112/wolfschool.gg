import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Smooth Scroll + ScrollTrigger Sync
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  // GSAP Animations
  useGSAP(
    () => {
      gsap.to(heroRef.current, {
        opacity: 0,
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Slide-up animations
      gsap.utils.toArray(".slide-up").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: contentRef }
  );

  const gearImg = "/assets/gearModel.jpg";
  const swordImg = "/assets/swordModel.jpg";

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-hidden" ref={contentRef} >
      {/* HERO */}
      <div ref={heroRef} className="hero relative w-full min-h-screen">
        <video
          src="/background2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex items-center justify-end mx-[15%] h-full">
          <div className="flex flex-col gap-2 items-center text-center mt-44 slide-up">
            <h1 className="text-red-800 text-[3vw] font-bold">
              Find the best build <br /> according to your playstyle
            </h1>

            <h3 className="text-white text-xl">
              Step into the world of The Witcher 3 like never before. Explore
              quests, characters, builds, <br /> and hidden secrets.
            </h3>

            <div className="mt-8 flex items-center gap-4 slide-up">
              <button className="px-6 py-3 rounded-xl bg-[#e03b3b] text-black font-semibold shadow-lg hover:scale-105 transition-transform">
                Find my build
              </button>
              <button className="px-6 py-3 rounded-xl bg-white text-black font-semibold shadow-lg hover:scale-105 transition-transform">
                See featured build
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 items-center slide-up">
              {[ 
                { key: "combat", label: "Combat", icon: "⚔️" },
                { key: "signs", label: "Signs", icon: "✨" },
                { key: "alchemy", label: "Alchemy", icon: "🧪" },
                { key: "hybrid", label: "Hybrid", icon: "🌀" }
              ].map((p) => (
                <button
                  key={p.key}
                  className="flex items-center gap-2 px-4 py-2 bg-black border border-red-800/60 rounded-lg text-sm hover:bg-red-800 hover:text-black transition text-white duration-200"
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
      </div>

      {/* CHOOSE YOUR PATH */}
      <section className="w-full px-10 md:px-20 mt-24 slide-up">
        <h2 className="text-4xl font-bold mb-6">Choose Your Path</h2>
        <p className="text-gray-300 max-w-2xl mb-10">
          Select a school or playstyle and get matched with curated builds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Combat Builds", desc: "Critical hits, fast attacks.", icon: "⚔️" },
            { title: "Signs Builds", desc: "Maximize sign intensity.", icon: "✨" },
            { title: "Alchemy Builds", desc: "Potions & decoctions synergy.", icon: "🧪" },
            { title: "Hybrid Builds", desc: "Mix everything together.", icon: "🌀" }
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-black/60 border border-red-900/40 rounded-xl hover:bg-red-900/30 transition shadow-lg hover:scale-105 slide-up"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED BUILD */}
      <section className="w-full px-10 md:px-20 mt-24 mb-0 slide-up">
        <h2 className="text-4xl font-bold mb-6">Featured Build of the Week</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-black/40 border border-red-900/40 rounded-2xl p-10 shadow-xl">
          <div className="lg:col-span-2 slide-up">
            <h3 className="text-2xl font-bold">
              Wolf School – Fast Attack Build
            </h3>
            <p className="text-gray-300 mt-2">
              High-crit, fast-paced build relying on mobility and precision.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6 text-gray-300">
              <div>
                <strong>Key Perks:</strong>
                <ul className="list-disc ml-4 mt-2 text-sm">
                  <li>Cat School Techniques</li>
                  <li>Fleet Footed</li>
                  <li>Precise Blows</li>
                </ul>
              </div>
              <div>
                <strong>Recommended Gear:</strong>
                <ul className="list-disc ml-4 mt-2 text-sm">
                  <li>Wolven Armor</li>
                  <li>Superior Swallow</li>
                  <li>Feline Silver Sword</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-4 slide-up">
            <img
              src={gearImg}
              alt="Gear Model"
              className="rounded-xl border border-red-900/40 shadow-md object-cover h-96"
            />
            <img
              src={swordImg}
              alt="Sword Model"
              className="rounded-xl border border-red-900/40 shadow-md object-cover h-96"
            />
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-400 py-10">
        © {new Date().getFullYear()} WitcherSchool.gg
      </footer>
    </div>
  );
};

export default LandingPage;
