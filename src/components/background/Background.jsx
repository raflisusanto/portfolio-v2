/** Hero backdrop: radial glow plus a faint grid. */
const Background = () => (
  <>
    <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3490dc_100%)]" />
    <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-size-[50px_60px]" />
  </>
);

export default Background;
