import { Nav } from "../_component/Nav";
import { FadeInOutLayout } from "./_layout/FadeInOutLayout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Nav pathName="fadeinout" />
         <FadeInOutLayout>{children}</FadeInOutLayout>
      </>
   );
};

export default RootLayout;
