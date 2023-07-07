"use client";
import { usePathname } from "next/navigation";
import { MekuriLayout } from "@/packages/mekuri/src";

export const PageTransitionLayout = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return <MekuriLayout router={pathname}>{children}</MekuriLayout>;
};
