const Card = ({ img }) => {
  return (
    <div class="max-w-xs text-white font-light text-sm bg-white rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white border-opacity-20">
      <a href="#">
        <img class="rounded-t-lg" src={img} alt="" />
      </a>
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
          Project 1
        </h5>
        <p class="mb-3 font-normal text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          framer.
        </p>
        <a
          href="#"
          class="rounded-md inline-flex items-center px-3 py-2 text-sm font-medium text-center focus:ring-4 focus:outline-none  bg-[#417ff2] hover:bg-blue-700 focus:ring-blue-800"
        >
          Read more
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
