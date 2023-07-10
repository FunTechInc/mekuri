import { register } from "@/packages/mekuri/src/utils/register";
import { MainWrapper } from "./MainWrapper";
import { Header } from "@/app/_components/Header";
import { Footer } from "@/app/_components/Footer";
import {
   PageTransitionAnimation,
   PageTransitionContext,
   PageTransitionLayout,
} from "../PageTransition";

/*===============================================
import pages
===============================================*/

import Home from "@/app/page";
import Page1 from "@/app/(pages)/page1/page";
import Page2 from "@/app/(pages)/page2/page";
import Page3 from "@/app/(pages)/page3/page";

const routing = [
   {
      path: "/",
      children: <Home />,
   },
   {
      path: "/page1",
      children: <Page1 />,
   },
   {
      path: "/page3",
      children: <Page3 />,
   },
   // ...register({ path: ["/page2"], children: [<Page2 key={"page2"} />] }),
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <MainWrapper>
         <Header />
         <main>
            <PageTransitionContext routing={routing}>
               <PageTransitionAnimation>
                  <PageTransitionLayout>{children}</PageTransitionLayout>
               </PageTransitionAnimation>
            </PageTransitionContext>
         </main>
         <Footer />
      </MainWrapper>
   );
};
