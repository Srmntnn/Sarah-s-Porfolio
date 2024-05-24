import React from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";

import AProject1 from "../assets/aenonFile/Porfolio.png";
import AProject2 from "../assets/aenonFile/Masskara.png";

import GProject1 from "../assets/gracienFile/1.jpg";
import GPoster1 from "../assets/gracienFile/gg.png";
import GPoster2 from "../assets/gracienFile/Cupcake.png";
import Gposter3 from "../assets/gracienFile/gracien esmeralda_FLYER.jpg";
import Gposter4 from "../assets/gracienFile/cupcakeflyer.png";

import HTML from "../assets/tech-editors-icons/html.png";
import Javasctipt from "../assets/tech-editors-icons/javascript.png";
import Css from "../assets/tech-editors-icons/css.png";
import linkIcon from "../assets/link-solid.svg";

function Works() {
  return (
    <section>
      <div className={`${styles.paddingX} pt-20 mx-auto max-w-screen-2xl`}>
        <div className="paragraphFont flex flex-col text-center items-center justify-center mt-20">
          <h1 className={`${styles.sectionSubText} pink-text-gradient w-fit`}>
            Works
          </h1>
          <h1 className={`${styles.sectionHeadText} customFont `}>
            OUR PROJECTS
          </h1>
          <p
            className={`${styles.sectionSubText} paragraphFont text-secondary`}
          >
            These are some side projects that we finished.
          </p>
        </div>
        <h1
          className={`${styles.sectionSubHeadText} md:mt-16 mt-12 md:mb-10 mb-8 paragraphFont font-extralight pink-text-gradient w-fit`}
        >
          Web Projects.
        </h1>
        <div className="md:autogridTwo autogrid gap-x-7 gap-y-12">
          <div className="relative overflow-hidden  max-w-[100%] w-full flex flex-col justify-center items-center gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={GProject1} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                Hotel Transylvania
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>
                dsajk jdksajdk sajdksajdk sajkdj askdjs akjdk sajdksajdk
                asjdksajkdj
              </p>

              <div className="flex gap-4 justify-center flex-wrap mt-6">
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Javasctipt} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    Javascript
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={HTML} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    HTML
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Css} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    CSS
                  </p>
                </div>
              </div>

              <div className="h-12 rounded-lg bg-secondary mt-6 shadow-xl flex items-center justify-center">
                <Link to="#">
                  <img src={linkIcon} alt="" className="h-[24px]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden max-w-[100%] w-full flex flex-col gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={AProject1} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                Aenon's Porfolio
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>
                A personal porfolio created for fun.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mt-6">
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Javasctipt} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    Javascript
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={HTML} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    HTML
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Css} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    CSS
                  </p>
                </div>
              </div>

              <div className="h-12 rounded-lg hover:scale-105 custom-gradient mt-6 shadow-xl flex items-center justify-center">
                <Link
                  to="https://ulap-github-io.vercel.app/"
                  target="_Blank"
                  className="h-full w-full flex items-center justify-center"
                >
                  <img src={linkIcon} alt="" className="h-[24px]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden max-w-[100%] w-full flex flex-col gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={AProject2} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                Masskara
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>
                A commissioned project from a student that contained information
                about masskara festival.
              </p>

              <div className="flex gap-4 justify-center flex-wrap mt-6">
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Javasctipt} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    Javascript
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={HTML} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    HTML
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={Css} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    CSS
                  </p>
                </div>
              </div>

              <div className="h-12 rounded-lg hover:scale-105 custom-gradient mt-6 shadow-xl flex items-center justify-center">
                <Link
                  to="https://massakara.vercel.app/"
                  target="_Blank"
                  className="h-full w-full flex items-center justify-center"
                >
                  <img src={linkIcon} alt="" className="h-[24px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h1
          className={`${styles.sectionSubHeadText} md:mt-16 mt-12 md:mb-10 mb-8 paragraphFont font-extralight pink-text-gradient w-fit`}
        >
          Poster Gallery.
        </h1>

        <div className="flex  justify-center flex-wrap cursor-pointer">
          <div className="relative overflow-hidden max-w-[350px] w-full bg-primary items-center flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={GPoster1} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[350px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={GPoster2} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[350px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={Gposter3} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[350px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={Gposter4} alt="" className=" hover:scale-105 " />
          </div>
        </div>

        <div className="md:flex-row flex mt-12 flex-col justify-center w-full md:gap-6 gap-4 items-center">
          <div className="h-14 md:h-16 flex items-center justify-center px-10 bg-[#03000C] shadow-xl rounded-[100vmax] max-w-[320px] w-full py-4">
            <Link to='/aenon' className="flex items-center justify-center ">
              <p className={`${styles.textHead} text-white paragraphFont text-center`}>
                View Aenon's Projects
              </p>
            </Link>
          </div>
          <div className="md:h-10 w-[100px] h-[2px] md:w-[2px] bg-zinc-700 "></div>
          <div className="h-14 md:h-16 flex items-center justify-center px-10 bg-[#03000C] shadow-xl rounded-[100vmax] max-w-[320px] w-full py-4">
            <Link to='/gracien' className="flex items-center justify-center ">
              <p className={`${styles.textHead} text-white paragraphFont text-center`}>
                View Gracien's Projects
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
