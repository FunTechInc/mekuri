import { Nav } from "../_component/Nav";
import { CurtainLayout } from "./_layout/CurtainLayout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Nav pathName="curtain" />
         <CurtainLayout>{children}</CurtainLayout>
      </>
   );
};

export default RootLayout;
