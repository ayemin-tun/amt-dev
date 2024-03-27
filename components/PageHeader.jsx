const PageHeader = ({ children }) => {
  return (
    <>
      {" "}
      <h1 className="font-bold text-2xl dark:text-white transition-colors duration-500 overflow-hidden uppercase">
        <span data-aos="zoom-in">{children}</span> <br />
        <div
          className="w-[70%] bg-blue-800 h-2 rounded-e-full"
          data-aos="fade-right"
        ></div>
      </h1>
    </>
  );
};

export default PageHeader;
