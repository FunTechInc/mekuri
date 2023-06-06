import { Nav } from "../_component/Nav";
import { FadeInOutLayout } from "./_layout/FadeInOutLayout";

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <>
         <Nav />
         <div className="ly_wrapper is_hidden">
            <FadeInOutLayout>{children}</FadeInOutLayout>
         </div>
      </>
   );
}
