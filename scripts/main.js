import { gsap } from "gsap";
import { _numWithUnitExp } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square1", {
  x: 1000,
  duration: 8,
  scrollTrigger: {
    trigger: ".square2",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
    toggleActions: "restart none none none",
    // pin: true,
    // pin: ".square1",
    pinSpacing: true,
    markers: {
      startColor: "white",
      endColor: "red",
      fontSize: "20px",
      indent: 100,
    }
  }
});