export type IntersectionObserverHandler = (
   targetRef: React.RefObject<HTMLElement>,
   callback: (isIntersecting: boolean) => void
) => void;

/** 
 * The second argument callback function receives the intersection judgment of the first argument ref.
 * @param targetRef React.RefObject<HTMLElement>
 * @param callback (isIntersecting: boolean) => void
) => void;
 */
export const intersectionObserverHandler: IntersectionObserverHandler = (
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
            callback(entry.isIntersecting);
            observer.unobserve(entry.target);
         });
      },
      { rootMargin: "0px", threshold: 0 }
   );
   observer.observe(target);
};
