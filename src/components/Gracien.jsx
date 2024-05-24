import React from "react";
import { styles } from "../style";
import GracienPic from "../assets/Gracien.png";
import Instagram from "../assets/gracienFile/instagram (1).svg";
import LinkedIn from "../assets/gracienFile/linkedin (2).svg";
import Youtube from "../assets/gracienFile/youtube (2).svg";
import Facebook from "../assets/gracienFile/facebook.svg";
import { Link } from "react-router-dom";

import AProject1 from "../assets/gracienFile/Screenshot 2024-05-16 195404.png";
import AProject2 from "../assets/gracienFile/Webpage.png";
import GPoster1 from "../assets/gracienFile/gg.png";
import GPoster2 from "../assets/gracienFile/Cupcake.png";
import Gposter3 from "../assets/gracienFile/gracien esmeralda_FLYER.jpg";
import Gposter4 from "../assets/gracienFile/cupcakeflyer.png";
import GProject1 from "../assets/gracienFile/1.jpg";

import HTML from "../assets/tech-editors-icons/html.png";
import Javasctipt from "../assets/tech-editors-icons/javascript.png";
import Css from "../assets/tech-editors-icons/css.png";
import linkIcon from "../assets/link-solid.svg";

function Gracien() {
  return (
    <div className={`${styles.paddingX} max-w-screen-2xl mx-auto w-full pt-20`}>
      <div className="md:mt-16 mt-12">
        <div
          className={`paragraphFont flex flex-col items-center justify-center mt-20`}
        >
          <p
            className={`${styles.sectionSubText} pink-text-gradient w-fit text-center`}
          >
            Introduction
          </p>
          <h1 className={`${styles.heroHeadText} customFont`}>ABOUT ME.</h1>
        </div>
        <div className="customgrid mt-20 items-center justify-center place-items-center">
          <img src={GracienPic} alt="" className="max-w-[450px] w-full" />
          <div className="flex flex-col gap-5">
            <div className="flex">
              <div
                className={`${styles.paddingX} flex flex-col bg-[#03000C] h-fit shadow-xl py-7 rounded-2xl md:mt-2 mt-10`}
              >
                <h1 className={`${styles.textHead} paragraphFont`}>
                  Hi! I Am{" "}
                  <span
                    className={`${styles.subHead} pink-text-gradient customFont`}
                  >
                    Gracien T Esmeralda
                  </span>
                  , a 3rd year college IT student from STI West Negros
                  University. Aspiring content creator, and an entrepreneur. PC
                  and Keyboard building hobbyist.
                </h1>
              </div>
            </div>

            <div
              className={`${styles.paddingX} flex flex-col bg-[#03000C] h-fit shadow-xl py-7 gap-2 rounded-2xl`}
            >
              <h1 className={`${styles.subHead} paragraphFont`}>Skills:</h1>
              <div className="flex items-center gap-2">
                <div className="flex h-3 justify-center orange-gradient w-[15%] rounded"></div>
                <h1 className={`${styles.textHead} paragraphFont`}>
                  Basic video editing
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 justify-center violet-gradient w-[10%] rounded"></div>
                <h1 className={`${styles.textHead} paragraphFont`}>
                  Social Media Management
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 justify-center green-gradient w-[13%] rounded"></div>
                <h1 className={`${styles.textHead} paragraphFont`}>
                  Content Creation
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 justify-center blue-gradient w-[25%] rounded"></div>
                <h1 className={`${styles.textHead} paragraphFont`}>
                  PC Building
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 justify-center orange-gradient w-[8%] rounded"></div>
                <h1 className={`${styles.textHead} paragraphFont`}>
                  Basic Soldering
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 justify-center green-pink-gradient w-[20%] rounded"></div>
                <h1 className={`${styles.textHead} paragraphFont`}>
                  UI Design
                </h1>
              </div>
            </div>
          </div>
          <div
            className={`${styles.paddingX} flex flex-col bg-[#03000C] h-fit shadow-xl max-w-[700px] w-full py-7 gap-2 rounded-2xl md:mt-12 mt-5`}
          >
            <h1 className={`${styles.subHead} paragraphFont`}>Experiences:</h1>
            <div className="flex items-center gap-2">
              <div className="flex h-3 justify-center orange-gradient w-[15%] rounded"></div>
              <h1 className={`${styles.textHead} paragraphFont`}>
                Student Council CICT Executive Secretary S.Y 2021-2022
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-3 justify-center violet-gradient w-[10%] rounded"></div>
              <h1 className={`${styles.textHead} paragraphFont`}>
                Student Organization Treasurer S.Y 2021-2022
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-3 justify-center green-gradient w-[13%] rounded"></div>
              <h1 className={`${styles.textHead} paragraphFont`}>
                Vice President S.Y 2022-2023
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-3 justify-center blue-gradient w-[25%] rounded"></div>
              <h1 className={`${styles.textHead} paragraphFont`}>
                CWS Sales Trainee
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-9 md:mt-24 mt-16">
          <Link
            to="https://www.instagram.com/cupcake.ggwp/"
            target="_Blank"
            className=""
          >
            <img
              src={Instagram}
              alt=""
              className="max-w-[94px] w-full  hover:invert hover:scale-75"
            />
          </Link>
          <Link
            to="https://www.facebook.com/yenssshin"
            target="_Blank"
            className=""
          >
            <img
              src={Facebook}
              alt=""
              className="max-w-[94px] w-full  hover:invert hover:scale-75"
            />
          </Link>
          <Link
            to="https://www.youtube.com/@ShiiinYT"
            target="_Blank"
            className=""
          >
            <img
              src={Youtube}
              alt=""
              className="max-w-[94px] w-full  hover:invert hover:scale-75"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/gracienesmeralda/"
            target="_Blank"
            className=""
          >
            <img
              src={LinkedIn}
              alt=""
              className="max-w-[94px] w-full  hover:invert hover:scale-75"
            />
          </Link>
        </div>

        <h1
          className={`${styles.sectionSubHeadText} md:mt-16 mt-12 md:mb-10 mb-8 paragraphFont font-extralight pink-text-gradient w-fit`}
        >
          My Projects.
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
              <p className={`${styles.textHead} paragraphFont`}>...</p>

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
                Gracien's Porfolio
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>...</p>

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
              <img src={AProject2} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                Geeky World
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>...</p>

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
        </div>

        <div className="flex  justify-center flex-wrap cursor-pointer md:mt-16 mt-12 md:mb-10 mb-8">
          <div className="relative overflow-hidden max-w-[300px] w-full bg-primary items-center flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={GPoster1} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[300px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={GPoster2} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[300px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={Gposter3} alt="" className=" hover:scale-105 " />
          </div>
          <div className="relative overflow-hidden max-w-[300px] w-full bg-primary items-center bg-cover flex rounded-lg border-[2px] border-primary shadow-xl">
            <img src={Gposter4} alt="" className=" hover:scale-105 " />
          </div>
        </div>

        <div className="md:flex-row flex mt-12 flex-col justify-center w-full md:gap-6 gap-4 items-center">
          <div className="h-14 md:h-16 flex items-center justify-center px-10 custom-gradient shadow-xl rounded-[100vmax] max-w-[320px] w-full py-4 hover:scale-105 cursor-pointer">
            <Link
              to="/aenon"
              className="flex items-center justify-center "
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <p
                className={`${styles.textHead} text-white paragraphFont text-center`}
              >
                Aenon
              </p>
            </Link>
          </div>
          <div className="md:h-10 w-[100px] h-[2px] md:w-[2px] bg-zinc-700 "></div>
          <div className="h-14 md:h-16 flex items-center justify-center px-10 border-[1px] shadow-xl rounded-[100vmax] max-w-[320px] w-full py-4 hover:scale-105 cursor-pointer">
            <Link
              to="/"
              className="flex items-center justify-center "
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <p
                className={`${styles.textHead} text-white paragraphFont text-center`}
              >
                Back to home
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gracien;
