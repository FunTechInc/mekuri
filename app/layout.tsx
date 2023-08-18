//component
import { AppHooks } from "./app-hooks";
import { MainLayout } from "@/app/_layout/MainLayout";

//font
import { Lato } from "next/font/google";
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

//css
import "the-new-css-reset/css/reset.css";
import "@funtech-inc/spice/css";
import "@/css/global.scss";

//meta
import type { Metadata } from "next";
const metadata: Metadata = {
   title: {
      default: "(hidden)mekuri | FunTech",
      template: "%s | FunTech",
   },
   description:
      "(hidden)mekuri is a package for page transition animation in Next.js. It supports both 'wait' and 'sync' modes, as well as popstate (scroll position preservation during popstate). Since animations can be set on a per-component basis, you can implement them flexibly using animation libraries such as GSAP.",
   twitter: {
      card: "summary_large_image",
      title: "(hidden)sauce | FunTech",
      creator: "@funtech_inc",
      siteId: "@funtech_inc",
   },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja">
         <body className={lato.className}>
            <MainLayout>{children}</MainLayout>
         </body>
         <AppHooks />
      </html>
   );
};

export { metadata };
export default RootLayout;
