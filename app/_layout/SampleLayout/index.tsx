import { Suspense } from "react";
import { suspend } from "suspend-react";
import s from "./sample.module.scss";

const Waiter = () => {
   suspend(
      new Promise<string>((resolve) => {
         setTimeout(() => {
            resolve("");
         }, 10000);
      }),
      []
   );
   return null;
};

export const SampleLayout = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return (
      <div className={`${s.sample} ${className}`}>
         <Suspense fallback={<p>loading</p>}>
            <Waiter />
            {children}
         </Suspense>
      </div>
   );
};
