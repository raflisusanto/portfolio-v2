const ArrowDownButton = () => {
  return (
    <button
      className="animate-bounce mt-20 bg-white p-4 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-2 border-white border-opacity-20"
      onClick={() => {}}
    >
      <svg
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.66929 14.243L1.71929 10.293C1.62704 10.1975 1.5167 10.1213 1.39469 10.0689C1.27269 10.0165 1.14147 9.9889 1.00869 9.98775C0.87591 9.9866 0.74423 10.0119 0.621334 10.0622C0.498438 10.1125 0.386786 10.1867 0.292893 10.2806C0.199001 10.3745 0.124748 10.4861 0.0744668 10.609C0.0241859 10.7319 -0.00111606 10.8636 3.77564e-05 10.9964C0.00119157 11.1292 0.0287779 11.2604 0.0811869 11.3824C0.133596 11.5044 0.209778 11.6148 0.305288 11.707L5.96229 17.364C6.14982 17.5515 6.40412 17.6568 6.66929 17.6568C6.93445 17.6568 7.18876 17.5515 7.37629 17.364L13.0333 11.707C13.2154 11.5184 13.3162 11.2658 13.314 11.0036C13.3117 10.7414 13.2065 10.4906 13.0211 10.3052C12.8357 10.1198 12.5849 10.0146 12.3227 10.0123C12.0605 10.01 11.8079 10.1108 11.6193 10.293L7.66929 14.243V1C7.66929 0.734784 7.56393 0.48043 7.37639 0.292893C7.18886 0.105357 6.9345 0 6.66929 0C6.40407 0 6.14972 0.105357 5.96218 0.292893C5.77465 0.48043 5.66929 0.734784 5.66929 1V14.243Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default ArrowDownButton;
