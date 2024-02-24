import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#3490dc_100%)]"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:50px_60px]"></div>
      <Sidebar />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      {/* <footer>
        <h1>Footer</h1>
      </footer> */}
    </>
  );
};

export default App;
