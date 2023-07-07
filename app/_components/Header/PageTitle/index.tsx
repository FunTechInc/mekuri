import { PageTransitionLayout } from "./Transition";

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
   return (
      <div>
         <PageTransitionLayout>{children}</PageTransitionLayout>
      </div>
   );
};
