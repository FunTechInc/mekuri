import s from "./sample.module.scss";

export const SampleLayout = ({
   children,
   className,
}: {
   children: React.ReactNode;
   className: string;
}) => {
   return <div className={`${s.sample} ${className}`}>{children}</div>;
};
