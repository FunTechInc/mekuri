import { RefObject } from "react";
import { gsap } from "gsap";

type TRef = RefObject<HTMLDivElement>;
export const leaveAnim = (
   wrapperRef: TRef,
   ref: TRef,
   yPosBeforeLeave: number,
   duration: number
) => {
   const wWidth = window.innerWidth;
   gsap.set(wrapperRef.current, {
      position: "absolute",
      top: `${yPosBeforeLeave * -1}px`,
      left: 0,
      right: 0,
      margin: "auto",
   });
   gsap.to(ref.current, {
      x: wWidth * -1,
      scale: 0.8,
      duration: 1,
      ease: "power1.out",
   });
};

export const enterAnim = (ref: TRef, duration: number) => {
   const wWidth = window.innerWidth;
   gsap.fromTo(
      ref.current,
      {
         x: wWidth * 1,
      },
      {
         x: 0,
         scale: 1,
         duration: 1,
         ease: "power2.out",
      }
   );
};
