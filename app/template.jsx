import { AOSInit } from "@/components/Aos";

const Template = ({ children }) => {
  return (
    <>
      <AOSInit />
      {children}
    </>
  );
};

export default Template;
