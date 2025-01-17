import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: string;
}

const ScreenContainer = ({ children, style }: Props) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-[15px] xl:px-[0px]  ${style}`}
    >
      {children}
    </div>
  );
};

export default ScreenContainer;
