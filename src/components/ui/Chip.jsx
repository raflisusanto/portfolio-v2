const Chip = ({ name, className, onClick }) => {
  return (
    <div
      className={`${className} flex justify-center px-10 py-1 w-10 md:w-60 text-white font-light text-sm rounded-2xl bg-clip-padding backdrop-blur-md border border-white/20 cursor-pointer transition duration-200`}
      onClick={onClick}
    >
      <h5>{name}</h5>
    </div>
  );
};

export default Chip;
