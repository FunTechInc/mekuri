export type TIntersectionObserverHandler = (
   targetRef: React.RefObject<HTMLElement>,
   callback: (isIntersecting: boolean) => void
) => void;

export const intersectionObserverHandler: TIntersectionObserverHandler = (
   targetRef,
   callback
) => {
   const target = targetRef?.current;
   if (!target) {
      return;
   }
   const observer = new IntersectionObserver(
      (
         entries: IntersectionObserverEntry[],
         observer: IntersectionObserver
      ) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               callback(true);
               observer.unobserve(entry.target);
            } else if (!entry.isIntersecting) {
               callback(false);
               observer.unobserve(entry.target);
            }
         });
      },
      { rootMargin: "0px", threshold: 0 }
   );
   observer.observe(target);
};
