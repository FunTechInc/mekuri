import type { Metadata } from "next";
import { SampleCoitainer } from "@/app/_components/SampleCoitainer";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import { LINKS } from "@/app/constants";
import { SampleCard } from "@/app/_components/SampleCard";

const metadata: Metadata = {
   title: "page2",
   description: "page2page2page2page2page2page2page2page2",
};

const Sample = () => {
   return (
      <SampleCoitainer
         style={{
            backgroundColor: LINKS[2].color,
         }}>
         <SampleAnimation>
            {[...Array(10)].map((_, i) => (
               <SampleCard key={i}>{LINKS[2].emoji}</SampleCard>
            ))}
         </SampleAnimation>
      </SampleCoitainer>
   );
};

export { metadata };
export default Sample;
