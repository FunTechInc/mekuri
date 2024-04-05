import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { create } from "zustand";
import { useAppStore } from "@/app/_context/useAppStore";

type LenisStore = {
   lenis: Lenis | null;
   setLenis: (value: Lenis) => void;
};

export const useLenis = create<LenisStore>((set) => ({
   lenis: null,
   setLenis: (value: Lenis) => set({ lenis: value }),
}));

export const useLenisRegister = () => {
   const lenis = useRef<Lenis | null>(null);
   const setLenis = useLenis((state) => state.setLenis);

   useEffect(() => {
      lenis.current = new Lenis({
         duration: 1.2,
         easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         smoothWheel: true,
         infinite: false,
         syncTouch: false,
         // syncTouchLerp: 0.05,
      });
      setLenis(lenis.current);

      // integrate with gsap
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
      lenis.current.on("scroll", ScrollTrigger.update);

      // raf with gsap ticker（You can also loop using r3f's addEffect instead of GSAP's ticker）
      function update(time: number) {
         lenis.current?.raf(time * 1000);
      }
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      return () => {
         lenis.current?.destroy();
         gsap.ticker.remove(update);
      };
   }, [setLenis]);

   const isModalOpen = useAppStore(({ isModalOpen }) => isModalOpen);
   const isMenuOpen = useAppStore(({ isMenuOpen }) => isMenuOpen);
   if (isModalOpen || isMenuOpen) {
      lenis.current?.stop();
   } else {
      lenis.current?.start();
   }

   return lenis;
};
