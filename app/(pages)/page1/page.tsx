import type { Metadata } from "next";
import { SampleCoitainer } from "@/app/_components/SampleCoitainer";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import { LINKS } from "@/app/constants";
import { SampleCard } from "@/app/_components/SampleCard";

const metadata: Metadata = {
   title: "page1",
   description: "page1page1page1page1page1",
};

const Sample = () => {
   return (
      <SampleCoitainer
         style={{
            backgroundColor: LINKS[1].color,
         }}>
         <SampleAnimation>
            {[...Array(10)].map((_, i) => (
               <SampleCard key={i}>{LINKS[1].emoji}</SampleCard>
            ))}
         </SampleAnimation>
      </SampleCoitainer>
   );
};

export { metadata };
export default Sample;
