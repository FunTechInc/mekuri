import { SampleLayout } from "@/app/_layout/SampleLayout";
import type { Metadata } from "next";
import { SampleAnimation } from "@/app/_components/SampleAnimation";
import s from "./style.module.scss";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const Sample = () => {
   return (
      <SampleLayout className={s.wrapper}>
         <SampleAnimation dir="y">
            <h1>PAGE3</h1>
            <h1>PAGE3</h1>
            <h1>PAGE3</h1>
            <h1>PAGE3</h1>
         </SampleAnimation>
      </SampleLayout>
   );
};

export { metadata };
export default Sample;
