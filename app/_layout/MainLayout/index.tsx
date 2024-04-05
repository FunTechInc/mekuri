import { Header } from "@/app/_components/Header";
import { PageTransitionContext, PageTransitionLayout } from "../PageTransition";
import { MainWrapper } from "./MainWrapper";

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
               <PageTransitionLayout>{children}</PageTransitionLayout>
            </main>
         </PageTransitionContext>
      </MainWrapper>
   );
};
