# mekuri

![mekuri](public/app-head.jpg)

mekuri is a package for page transition animations for React, supporting both `wait` and `sync` modes, as well as `popstate` (scroll position preservation during popstate).

Animations can be customised for each component using the `useMekuriAnimation` hook, allowing for flexible implementation using animation libraries such as GSAP.

Next.js `Pages Router` as well as `App Router` are supported. However, the `App Router` page transitions use a slightly special method, so if you want a stable implementation, the `Pages Router` is recommended.

[Pages Router demo](https://github.com/FunTechInc/mekuri-demo-pages)

```bash
$ npm i @funtech-inc/mekuri
```

# Usage

```tsx
export default function App({ Component, pageProps }: AppProps) {
   const { pathname } = useRouter();
   return (
      <>
         <MekuriContext trigger={pathname}>
            <Header />
            <MekuriAnimation>
               <Mekuri>
                  <Component key={pathname} {...pageProps} />
               </Mekuri>
            </MekuriAnimation>
         </MekuriContext>
      </>
   );
}
```

## MekuriContext

The context to wrap the whole thing in. Set the `trigger` to a `state` to switch content. You can use `pathname` if you want to use it as a page transition.

## Mekuri

Unmounting of children can be delayed by wrapping them in a `Mekuri` component.

## useMekuriAnimation

Hooks that can be called within `MekuriContext`. Callbacks include `onOnce`, `onLeave`, `onEnter`, `onAfterSyncEnter`, `onEveryLeave` and `onEveryEnter`.

```tsx
const MekuriAnimation = ({ children }: { children: React.ReactNode }) => {
   const ref = useRef<HTMLDivElement>(null);
   const { contextSafe } = useGSAP({ scope: ref });
   useMekuriAnimation({
      onEveryEnter: contextSafe(() => {
         gsap.to(ref.current, {
            opacity: 1,
         });
      }),
      onEveryLeave: contextSafe(() => {
         gsap.to(ref.current, {
            opacity: 0,
         });
      }),
   });
   return <div ref={ref}>{children}</div>;
};
```

## useMekuriDuration

It is possible to receive the `duration` set in the `MekuriContext`.

```tsx
const { millisecond, second } = useMekuriDuration();
```

## useMekuriTrigger

`phase` : "enter" | "leave" , Specify the phase to subscribe to trigger updates

```tsx
const trigger = useMekuriTrigger(phase);
```

# integrate with Next.js App Router

Since the key cannot be obtained by changing children during app router page transition, it is necessary to import `LayoutRouterContext` from next and pass the context to `MekuriFreezer`.

For more information on `App Router` page transition animations, see the following issue.
[See this issue](https://github.com/vercel/next.js/issues/49279#issuecomment-1675782002)

## MekuriFreezer

```tsx
"use client";
import { MekuriFreezer, Mekuri } from "@/packages/mekuri/src";
// import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";
// Next.js ^13.5.2
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
