# mekuri

![mekuri](public/app-header.jpg)

mekuri is a package for page transition animations for React, supporting both `wait` and `sync` modes, as well as `popstate` (scroll position preservation during popstate).

Animations can be customised for each component using the `useMekuriAnimation` hook, allowing for flexible implementation using animation libraries such as GSAP.

Next.js `Pages Router` as well as `App Router` are supported. However, the `App Router` page transitions use a slightly special method, so if you want a stable implementation, the `Pages Router` is recommended.
[Pages Router demo](https://github.com/FunTechInc/mekuri-demo-pages)

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

For more information on `App Router` page transition animations, see the following issue.
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
