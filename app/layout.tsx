import "./global.scss";
import "the-new-css-reset/css/reset.css";
import { DotGothic16 } from "next/font/google";
import { AppHooks } from "./app-hooks";
import { Footer } from "./_component/Footer";

const dotGothic = DotGothic16({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
   title: "Page Mekuri",
   description:
      "page-mekuri is a demo for creating page transition animations in the app directory of Next13.",
   twitter: {
      card: "summary_large_image",
   },
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="ja">
         <body className={dotGothic.className}>
            <div className="ly_wrapper is_hidden">
               {children}
               <Footer />
            </div>
            <AppHooks />
         </body>
      </html>
   );
}
