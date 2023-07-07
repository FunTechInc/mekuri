import s from "./sample.module.scss";

export const SampleLayout = ({ children }: { children: React.ReactNode }) => {
   return <div className={s.sample}>{children}</div>;
};
