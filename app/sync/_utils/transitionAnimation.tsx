import { RefObject } from "react";
import { PAGEMEKURISTATE } from "../../_context/usePageMekuriStore";
import { gsap } from "gsap";

type TRef = RefObject<HTMLDivElement>;
export const leaveAnim = (
   wrapperRef: TRef,
   ref: TRef,
   yPosBeforeLeave: number
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
      duration: PAGEMEKURISTATE.mekuri.second(),
      ease: "power1.out",
   });
};

export const enterAnim = (wrapperRef: TRef, ref: TRef) => {
   const wWidth = window.innerWidth;
   gsap.fromTo(
      ref.current,
      {
         x: wWidth * 1,
      },
      {
         x: 0,
         scale: 1,
         duration: PAGEMEKURISTATE.mekuri.second(),
         ease: "power2.out",
      }
   );
};
