const Chip = ({ name, className }) => {
  return (
    <div
      className={`${className} flex justify-center px-10 py-1 w-60 text-white font-light text-sm bg-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white border-opacity-20 cursor-pointer hover:bg-opacity-20  transition duration-200`}
    >
      <h5>{name}</h5>
    </div>
  );
};

export default Chip;
