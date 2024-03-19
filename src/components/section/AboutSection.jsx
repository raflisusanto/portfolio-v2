import portrait from "../../assets/test.png";
import asset1 from "../../assets/Asset 1.png";
import asset2 from "../../assets/Asset 2.png";
import asset5 from "../../assets/Asset 5.png";

const AboutSection = () => {
  return (
    <section id="About" className="h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute -z-8 bg-gradient-to-b from-[#20527a] to-[#052136] h-full w-full shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)]"></div>

      {/* Left Ornament */}
      <div className="relative top-0 left-[-25rem] from-[#2e79b2] to-[#183955] before:absolute before:h-[680px] before:w-[450px] before:rounded-full before:bg-gradient-to-br"></div>

      <div className="relative hidden lg:flex px-28 xl:px-40 gap-20 justify-around items-center">
        <div className="flex flex-col justify-center">
          <p className="text-white text-sm xl:text-base font-extralight">
            ./he/.him
          </p>
          <h1 className="text-white text-xl xl:text-3xl font-semibold">
            About Me <span className="text-3xl lg:text-5xl">👋</span>
          </h1>
          <p className="text-white text-sm xl:text-base font-light pt-5 max-w-[400px] xl:max-w-[600px]">
            Informatics fresh graduate skilled in Front-End Development, Mobile
            Development, and Machine Learning. With 1+ years of experience, I
            have crafted visually captivating designs for various platforms and
            built dynamic user interfaces for web and mobile applications.
            Driven by a passion for learning new things and solving problems, I
            bring a unique and versatile skill set to the table. Ready to
            contribute to innovative projects, I am committed to staying on the
            cutting edge of technology and making a meaningful impact.
          </p>
          <button className="flex justify-center items-center mt-10 w-1/2 text-white font-light text-xs lg:text-sm bg-white rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-white border-opacity-20 px-8 py-4 tracking-widest hover:bg-white hover:text-black dark:text-neutral-200 transition duration-200">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-4"
              >
                <path
                  d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z"
                  fill="white"
                />
              </svg>
            </span>
            My Projects →
          </button>
        </div>
        <div className="relative">
          {/* Big Circles */}
          <div className="absolute left-[4rem] top-[12rem] -z-[0] from-[#183955] to-[#2e79b2] before:absolute before:h-[450px] before:w-[450px] before:rounded-full before:bg-gradient-to-tl"></div>
          {/* Cirlces */}
          <div className="absolute top-[24rem] -z-[0] from-[#2e79b2] to-[#183955] before:absolute before:h-[200px] before:w-[200px] before:rounded-full before:bg-gradient-to-tr"></div>
          {/* Ornaments */}
          <img
            src={asset1}
            className="absolute left-[-2rem] top-[24rem] z-40"
          ></img>
          <img
            src={asset2}
            className="absolute left-[16rem] top-[32rem] z-40"
          ></img>
          <img src={asset5} className="absolute top-[32rem] z-40"></img>
          {/* Portrait */}
          <img src={portrait} className="relative z-30 pt-20 max-w-none"></img>
        </div>
      </div>

      <div className="relative lg:hidden flex flex-col justify-center items-center mt-28 ml-[6rem] mr-[3.5rem]">
        <div className="bg-blue-700 w-32 h-32 mb-10 rounded-full"></div>
        <h1 className="text-white text-xl font-semibold">
          About Me <span className="text-3xl lg:text-5xl">👋</span>
        </h1>
        <p className="text-white text-sm font-light pt-5 max-w-[400px] xl:max-w-[600px] indent-4 text-justify">
          Informatics fresh graduate skilled in Front-End Development, Mobile
          Development, and Machine Learning. With 1+ years of experience, I have
          crafted visually captivating designs for various platforms and built
          dynamic user interfaces for web and mobile applications. Driven by a
          passion for learning new things and solving problems, I bring a unique
          and versatile skill set to the table. Ready to contribute to
          innovative projects, I am committed to staying on the cutting edge of
          technology and making a meaningful impact.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
