import "./global.scss";
import "the-new-css-reset/css/reset.css";
import { DotGothic16 } from "next/font/google";
import { AppHooks } from "./app-hooks";
import { Footer } from "./_component/Footer";
import { PageTransitionContext } from "./_context/MekuriContext";
const dotGothic = DotGothic16({ weight: ["400"], subsets: ["latin"] });

const metadata = {
   title: "(hidden)mekuri",
   description:
      "(hidden)mekuri is a package for page transition animation in Next.js. It supports both 'wait' and 'sync' modes, as well as popstate (scroll position preservation during popstate). Since animations can be set on a per-component basis, you can implement them flexibly using animation libraries such as GSAP.",
   twitter: {
      card: "summary_large_image",
   },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja">
         <body className={dotGothic.className}>
            <div className="ly_wrapper is_hidden">
               <PageTransitionContext>{children}</PageTransitionContext>
               <Footer />
            </div>
            <AppHooks />
         </body>
      </html>
   );
};

export { metadata };
export default RootLayout;
