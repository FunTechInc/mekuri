import { gsap } from "gsap";

/*===============================================
テキストの無限スクロール
===============================================*/

interface IProps {
   duration: number;
   dir: 1 | -1;
}

type TweenValue = any;
type TFunc = TweenValue | number | string;

export class InfinitSlider {
   target: HTMLElement;
   infinitElmArr: HTMLElement[];
   tl: false | GSAPTimeline;
   duration: number;
   dir: number;

   constructor(
      target: HTMLElement,
      childClass: string,
      { duration, dir }: IProps
   ) {
      this.target = target;
      this.infinitElmArr = [
         ...target.getElementsByClassName(childClass),
      ] as HTMLElement[];
      this.tl = false;
      this.duration = duration ?? 100;
      this.dir = dir ?? 1;
   }
   init() {
      const slideDir = this.dir;
      this.tl = gsap.timeline({
         paused: true,
         repeat: -1,
         defaults: {
            duration: this.duration,
            ease: "power0",
         },
      });
      if (slideDir === -1) {
         gsap.set(this.infinitElmArr, {
            x: function (index): TFunc {
               switch (index) {
                  case 0:
                     return 0;
                  case 1:
                     return "-200%";
               }
            },
         });
         this.tl
            .to(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "100%";
                     case 1:
                        return "-100%";
                  }
               },
            })
            .set(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "-100%";
                     case 1:
                        return "-100%";
                  }
               },
            })
            .to(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "0";
                     case 1:
                        return "0";
                  }
               },
            })
            .set(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "0";
                     case 1:
                        return "-200%";
                  }
               },
            });
      } else {
         this.tl
            .to(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "-100%";
                     case 1:
                        return "-100%";
                  }
               },
            })
            .set(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "100%";
                     case 1:
                        return "-100%";
                  }
               },
            })
            .to(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "0";
                     case 1:
                        return "-200%";
                  }
               },
            })
            .set(this.infinitElmArr, {
               x: function (index): TFunc {
                  switch (index) {
                     case 0:
                        return "0";
                     case 1:
                        return "0";
                  }
               },
            });
      }
      return this.tl;
   }
}
