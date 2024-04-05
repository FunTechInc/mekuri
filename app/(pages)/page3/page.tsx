import type { Metadata } from "next";
import { SampleCoitainer } from "@/app/_components/SampleCoitainer";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import { LINKS } from "@/app/constants";

const metadata: Metadata = {
   title: "page3",
   description: "page3page3page3page3page3page3page3",
};

const Sample = () => {
   return (
      <SampleCoitainer
         style={{
            backgroundColor: LINKS[3].color,
         }}>
         <SampleAnimation>
            {[...Array(10)].map((_, i) => (
               <div key={i}>{LINKS[3].emoji}</div>
            ))}
         </SampleAnimation>
      </SampleCoitainer>
   );
};

export { metadata };
export default Sample;
