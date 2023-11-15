# (hidden)mekuri

![mekuri](public/app-header.jpg)

(hidden)mekuri is a package for page transition animation in Next.js. It supports both 'wait' and 'sync' modes, as well as popstate (scroll position preservation during popstate). Since animations can be set on a per-component basis, you can implement them flexibly using animation libraries such as GSAP.

```bash
$ npm i @funtech-inc/mekuri
```

## MekuriContext

```tsx
"use client";

import { usePathname } from "next/navigation";
import { MekuriContext } from "@funtech-inc/mekuri";

export const PageTransitionContext = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <MekuriContext
         millisecond={600}
         scrollRestoration={{
            scrollRestoration: "restore",
            onEnter: (pos) => {
               window.scrollTo({ top: pos });
            },
         }}
         mode="wait"
         trigger={pathname}>
         {children}
      </MekuriContext>
   );
};
```

## Mekuri

```tsx
"use client";

import { MekuriFreezer, Mekuri } from "@funtech-inc/mekuri";
// import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
// Next.js ^13.5.2 〜
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";

export const PageTransitionLayout = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const pathname = usePathname();
   return (
      <Mekuri>
         <MekuriFreezer key={pathname} routerContext={LayoutRouterContext}>
            {children}
         </MekuriFreezer>
      </Mekuri>
   );
};
```

Since the key cannot be obtained by changing children during app router page transition, it is necessary to import LayoutRouterContext from next and pass the context to `MekuriFreezer`.

[See this issue](https://github.com/vercel/next.js/issues/49279#issuecomment-1675782002)

## useMekuriAnimation

```tsx
"use client";

import { useRef } from "react";
import { useMekuriAnimation, useMekuriDuration } from "@funtech-inc/mekuri";

export const PageTransitionAnimation = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   const ref = useRef(null);
   const { second } = useMekuriDuration();

   useMekuriAnimation({
      onEveryLeave: () => {
         // some event
      },
   });
   return <div ref={ref}>{children}</div>;
};
```

You can get the duration with `useMekuriDuration`.

```tsx
const { second, millisecond } = useMekuriDuration();
```
