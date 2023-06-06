import "./global.scss";
import "the-new-css-reset/css/reset.css";
import { DotGothic16 } from "next/font/google";
import { Nav } from "./_component/Nav";
import { AppHooks } from "./app-hooks";
// import { FadeInOutLayout } from "./_layout/FadeInOutLayout";
import { SyncLayout } from "./_layout/SyncLayout";
import { Footer } from "./_component/Footer";

const dotGothic = DotGothic16({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
   title: "Next13 PageTransition Demo",
   description: "Page transition demo with Next13",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={dotGothic.className}>
            <Nav />
            <div className="ly_wrapper is_hidden">
               <SyncLayout>{children}</SyncLayout>
            </div>
            <Footer />
            <AppHooks />
         </body>
      </html>
   );
}
