import { Nav } from "../_component/Nav";
import { SyncLayout } from "./_layout/SyncLayout";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Nav pathName="sync" />
         <SyncLayout>{children}</SyncLayout>
      </>
   );
};

export default RootLayout;
