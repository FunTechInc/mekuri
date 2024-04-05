import type { Metadata } from "next";
import { SampleCoitainer } from "@/app/_components/SampleCoitainer";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import { LINKS } from "@/app/constants";

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
               <div key={i}>{LINKS[2].emoji}</div>
            ))}
         </SampleAnimation>
      </SampleCoitainer>
   );
};

export { metadata };
export default Sample;
