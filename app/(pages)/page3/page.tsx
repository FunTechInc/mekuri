import Link from "next/link";
import { SampleLayout } from "@/app/_layout/SampleLayout";
import s from "./style.module.scss";

import type { Metadata } from "next";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const Sample = () => {
   return (
      <SampleLayout>
         <h1>PAGE3</h1>
      </SampleLayout>
   );
};

export { metadata };
export default Sample;
