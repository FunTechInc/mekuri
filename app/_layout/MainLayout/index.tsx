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

const createRouting = () => {
   return [
      {
         path: "/page3",
         children: <Page3 />,
      },
   ];
};

const routing = [
   {
      path: "/",
      children: <Home />,
   },
   {
      path: "/page1",
      children: <Page1 />,
   },
   // {
   //    path: "/page2",
   //    children: <Page2 />,
   // },
   {
      path: "/page3",
      children: <Page3 />,
   },
   //TODO:みたいにして、generateStaticParamsつくるときみたいなroutingの配列とkeyを格納したcomponent渡せばクリアできるんじゃ？
   //関数つくる前に、生で書いて実験すべし
   // ...createRouting({path:配列,children:配列}),みたいな
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
