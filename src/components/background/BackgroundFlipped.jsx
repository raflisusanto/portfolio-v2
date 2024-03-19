const BackgroundFlipped = ({ inset = "0" }) => {
  return (
    <>
      <div
        className={`absolute inset-${inset} -z-10 h-[60rem] w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#3490dc_100%)]`}
      ></div>
      <div
        className={`absolute inset-${inset} -z-10 h-[60rem] w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:50px_60px]`}
      ></div>
    </>
  );
};

export default BackgroundFlipped;
