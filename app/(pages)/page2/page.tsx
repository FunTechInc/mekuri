import { SampleLayout } from "@/app/_layout/SampleLayout";

import type { Metadata } from "next";

const metadata: Metadata = {
   title: "sample",
   description: "samplesamplesamplesamplesamplesamplesamplesample",
};

const Sample = () => {
   return (
      <SampleLayout>
         <h1>PAGE2</h1>
      </SampleLayout>
   );
};

export { metadata };
export default Sample;
