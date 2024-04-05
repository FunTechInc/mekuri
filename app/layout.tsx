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
      default: "mekuri | FunTech",
      template: "%s | FunTech",
   },
   description:
      "mekuri is a package for page transition animations for React, supporting both wait and sync modes, as well as popstate (and scroll position restoration!).",
   twitter: {
      card: "summary_large_image",
      title: "mekuri | FunTech",
      creator: "@funtech_inc",
      siteId: "@funtech_inc",
   },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="en">
         <body className={lato.className}>
            <MainLayout>{children}</MainLayout>
         </body>
         <AppHooks />
      </html>
   );
};

export { metadata };
export default RootLayout;
