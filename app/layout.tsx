import "./global.scss";
import "the-new-css-reset/css/reset.css";
import { DotGothic16 } from "next/font/google";
import { AppHooks } from "./app-hooks";
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
      <html lang="ja">
         <body className={dotGothic.className}>
            {children}
            <Footer />
            <AppHooks />
         </body>
      </html>
   );
}
