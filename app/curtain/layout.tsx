import { Nav } from "../_component/Nav";
import { CurtainLayout } from "./_layout/CurtainLayout";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <Nav pathName="curtain" />
         <CurtainLayout>{children}</CurtainLayout>
      </>
   );
}
