import { Nav } from "../_component/Nav";
import { FadeInOutLayout } from "./_layout/FadeInOutLayout";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <Nav pathName="fadeinout" />
         <FadeInOutLayout>{children}</FadeInOutLayout>
      </>
   );
}
