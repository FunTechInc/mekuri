import Link from "next/link";
import s from "./header.module.scss";
import { PageTitle } from "./PageTitle";
import { PageTransitionContext } from "./PageTitle/Transition";
import { Logo } from "./Logo";

/********************
page title routing
********************/
import Home from "./PageTitle/Slides/Home";
import Page1 from "./PageTitle/Slides/Page1";
import Page2 from "./PageTitle/Slides/Page2";
import Page3 from "./PageTitle/Slides/Page3";

const routing = [
   {
      path: "/",
      children: <Home />,
   },
   {
      path: "/page1",
      children: <Page1 />,
   },
   {
      path: "/page2",
      children: <Page2 />,
   },
   {
      path: "/page3",
      children: <Page3 />,
   },
];

export const Header = () => {
   return (
      <header className={s.wrapper}>
         <PageTransitionContext routing={routing}>
            <Logo />
            <PageTitle>
               <p>page title</p>
            </PageTitle>
         </PageTransitionContext>
         <nav className={s.linkWrapper}>
            <li>
               <Link className={s.link} href={"/page1"}>
                  page1
               </Link>
            </li>
            <li>
               <Link className={s.link} href={"/page2"}>
                  page2
               </Link>
            </li>
            <li>
               <Link className={s.link} href={"/page3"}>
                  page3
               </Link>
            </li>
         </nav>
      </header>
   );
};
