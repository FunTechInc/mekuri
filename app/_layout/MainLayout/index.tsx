import { MainWrapper } from "./MainWrapper";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import {
   PageTransitionAnimation,
   PageTransitionContext,
   PageTransitionLayout,
} from "../PageTransition";
import { StateTriggerSample } from "@/app/_components/StateTriggerSample";
import { RouterTriggerSample } from "@/app/_components/RouterTriggerSample";

export const MainLayout = async ({
   children,
}: {
   children: React.ReactNode;
}) => {
   return (
      <MainWrapper>
         <PageTransitionContext>
            <Header />
            <main>
               <PageTransitionAnimation>
                  <PageTransitionLayout>{children}</PageTransitionLayout>
               </PageTransitionAnimation>
               {/* <RouterTriggerSample /> */}
            </main>
         </PageTransitionContext>
         {/* <StateTriggerSample /> */}
         <Footer />
      </MainWrapper>
   );
};
