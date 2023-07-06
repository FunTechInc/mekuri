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
      duration: duration,
      ease: "power1.out",
   });
   /*===============================================
	When transitioning continuously, re-rendering does not occur and the position remains, so initialize it with setTimeout.
	===============================================*/
   setTimeout(() => {
      if (!wrapperRef.current) {
         return;
      }
      gsap.set(wrapperRef.current, {
         position: "",
      });
   }, duration * 1000);
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
         duration: duration,
         ease: "power2.out",
      }
   );
};
