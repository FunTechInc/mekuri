import { SampleLayout } from "@/app/_layout/SampleLayout";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import s from "./home.module.scss";

const HomeContent = () => {
   return (
      <SampleLayout className={s.wrapper}>
         <SampleAnimation dir="y">
            <h1>HOME</h1>
            <h1>HOME</h1>
            <h1>HOME</h1>
         </SampleAnimation>
      </SampleLayout>
   );
};

export default HomeContent;
