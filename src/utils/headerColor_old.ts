import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const changeColor = (data: string) => {
  gsap.registerPlugin(ScrollTrigger);
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");

  const outside = () => {
    header.classList.remove("text-primary");
    nav.classList.remove("text-primary");
    nav.classList.add("bg-primary");
  };
  const inside = () => {
    header.classList.add("text-primary");
    nav.classList.add("text-primary");
    nav.classList.remove("bg-primary");
    nav.classList.add("bg-white");
  };

  ScrollTrigger.create({
    trigger: data,
    start: "top top-=-80",
    end: "bottom top-=-80",
    onEnter: () => {
      inside();
    },
    onLeave: () => {
      outside();
    },
    onEnterBack: () => {
      inside();
    },
    onLeaveBack: () => {
      outside();
    },
    markers: false,
  });
};
