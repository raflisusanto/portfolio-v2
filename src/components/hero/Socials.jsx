import { motion } from "framer-motion";

const socialVariants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Socials = () => {
  return (
    <>
      <motion.a
        href="https://www.linkedin.com/in/raflisusanto/"
        target="_blank"
        variants={socialVariants}
      >
        <motion.svg
          width="26"
          height="26"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-9 right-16 hover:scale-125 duration-1000"
          variants={socialVariants}
        >
          <path
            d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
            fill="white"
          />
        </motion.svg>
      </motion.a>

      <motion.a
        href="https://github.com/raflisusanto"
        target="_blank"
        variants={socialVariants}
      >
        <motion.svg
          width="26"
          height="26"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-9 right-28 hover:scale-125 duration-1000"
          variants={socialVariants}
        >
          <path
            d="M17.0099 0.99014C16.3495 0.329746 15.5548 0 14.6251 0H3.37494C2.44517 0 1.65053 0.329746 0.99014 0.99014C0.329746 1.65053 0 2.44517 0 3.37494V14.6251C0 15.5548 0.329746 16.3495 0.99014 17.0099C1.65053 17.6703 2.44517 18 3.37494 18H6.0003C6.17148 18 6.30032 17.9937 6.38681 17.982C6.48744 17.9618 6.57826 17.9081 6.64448 17.8297C6.73007 17.7396 6.77331 17.609 6.77331 17.4378L6.76701 16.6405C6.7634 16.1323 6.7616 15.7305 6.7616 15.4332L6.49132 15.4801C6.32014 15.5116 6.10391 15.5251 5.84173 15.5215C5.56847 15.5165 5.29607 15.489 5.02728 15.4395C4.74114 15.3867 4.47178 15.2662 4.24165 15.0881C4.00064 14.9058 3.82089 14.6544 3.72631 14.3674L3.60919 14.0971C3.51047 13.8839 3.38645 13.6833 3.2398 13.4998C3.07223 13.2808 2.90195 13.1331 2.72987 13.0547L2.64878 12.9961C2.59224 12.9557 2.54081 12.9085 2.49562 12.8556C2.45246 12.8065 2.41692 12.7513 2.39021 12.6916C2.36679 12.6367 2.38661 12.5916 2.44877 12.5565C2.51184 12.5204 2.62446 12.5033 2.78933 12.5033L3.02357 12.5394C3.17944 12.57 3.37314 12.6637 3.60288 12.8196C3.83538 12.9781 4.0296 13.1864 4.17138 13.4295C4.35157 13.7493 4.5678 13.9935 4.82186 14.162C5.07593 14.3295 5.3318 14.4142 5.58947 14.4142C5.84714 14.4142 6.06967 14.3944 6.25797 14.3557C6.44006 14.318 6.617 14.2587 6.78502 14.1791C6.8553 13.6565 7.0463 13.2529 7.35893 12.9718C6.95384 12.9321 6.55236 12.8616 6.15797 12.761C5.77307 12.6553 5.40292 12.5018 5.05611 12.3042C4.69325 12.1067 4.37275 11.8397 4.11282 11.5186C3.86326 11.206 3.65784 10.796 3.49747 10.2888C3.338 9.78067 3.25782 9.19415 3.25782 8.53016C3.25782 7.58506 3.56594 6.78052 4.18309 6.11562C3.89479 5.40568 3.92182 4.60834 4.26508 3.72631C4.49212 3.65514 4.82817 3.70829 5.27324 3.88398C5.7183 4.05966 6.04445 4.21012 6.25166 4.33445C6.45888 4.46058 6.62466 4.56599 6.74989 4.65158C7.48233 4.44775 8.23927 4.34529 8.99955 4.34706C9.77346 4.34706 10.523 4.44887 11.2501 4.65158L11.6952 4.37049C12.0375 4.16494 12.3986 3.99238 12.7736 3.85515C13.188 3.69838 13.5034 3.65604 13.7232 3.72631C14.0746 4.60924 14.1052 5.40568 13.816 6.11652C14.4332 6.78052 14.7422 7.58506 14.7422 8.53106C14.7422 9.19505 14.662 9.78337 14.5016 10.2942C14.3422 10.8059 14.1349 11.2159 13.8809 11.5249C13.6164 11.8419 13.2945 12.1063 12.9322 12.3042C12.5538 12.515 12.1862 12.6673 11.8303 12.761C11.436 12.862 11.0345 12.9327 10.6294 12.9727C11.0348 13.3241 11.2384 13.8782 11.2384 14.6359V17.4378C11.2384 17.5702 11.2573 17.6775 11.297 17.7594C11.3152 17.7989 11.3412 17.8344 11.3734 17.8636C11.4056 17.8929 11.4433 17.9154 11.4844 17.9297C11.5708 17.9604 11.6465 17.9802 11.7132 17.9874C11.7799 17.9964 11.8754 17.9991 11.9997 17.9991H14.6251C15.5548 17.9991 16.3495 17.6694 17.0099 17.009C17.6694 16.3495 18 15.5539 18 14.6242V3.37494C18 2.44517 17.6703 1.65053 17.0099 0.99014Z"
            fill="white"
          />
        </motion.svg>
      </motion.a>
    </>
  );
};

export default Socials;
