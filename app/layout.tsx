import "./globals.css";
import { Inter } from "next/font/google";
import { Nav } from "./_component/Nav";
import { AppHooks } from "./app-hooks";
import { MainLayout } from "./_layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

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
         <body className={inter.className}>
            <Nav />
            <MainLayout>{children}</MainLayout>
            <AppHooks />
         </body>
      </html>
   );
}
