import { SampleCoitainer } from "@/app/_components/SampleCoitainer";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import { LINKS } from "@/app/constants";

const HomeContent = () => {
   return (
      <SampleCoitainer
         style={{
            backgroundColor: LINKS[0].color,
         }}>
         <SampleAnimation>
            {[...Array(10)].map((_, i) => (
               <div key={i}>{LINKS[0].emoji}</div>
            ))}
         </SampleAnimation>
      </SampleCoitainer>
   );
};

export default HomeContent;
