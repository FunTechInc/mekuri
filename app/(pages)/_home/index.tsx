import { SampleCoitainer } from "@/app/_components/SampleCoitainer";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import { LINKS } from "@/app/constants";
import { SampleCard } from "@/app/_components/SampleCard";

const HomeContent = () => {
   return (
      <SampleCoitainer
         style={{
            backgroundColor: LINKS[0].color,
         }}>
         <SampleAnimation>
            {[...Array(10)].map((_, i) => (
               <SampleCard key={i}>{LINKS[0].emoji}</SampleCard>
            ))}
         </SampleAnimation>
      </SampleCoitainer>
   );
};

export default HomeContent;
