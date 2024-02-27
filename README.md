# mekuri

![mekuri](public/app-header.jpg)

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

全体を wrap する context です。`trigger`にコンテンツを切り替えるための`state`を設定してください。ページ遷移として利用する場合は`pathname`を使うことができます。

## Mekuri

`Mekuri`コンポーネントで wrap することで children の unmount を遅延させることができます。

## useMekuriAnimation

`MekuriContext`内で呼び出すことができるフックです。コールバックには、`onOnce`, `onLeave`, `onEnter`, `onAfterSyncEnter`, `onEveryLeave`, `onEveryEnter` があります。

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

`MekuriContext`で設定した`duration`を受け取ることが可能です。

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
