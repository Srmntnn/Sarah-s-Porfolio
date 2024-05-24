import React from "react";
import { styles } from "../style";
import AenonPic from "../assets/Aenon.png";
import Instagram from "../assets/gracienFile/instagram (1).svg";
import LinkedIn from "../assets/gracienFile/linkedin (2).svg";
import Youtube from "../assets/gracienFile/youtube (2).svg";
import Facebook from "../assets/gracienFile/facebook.svg";
import { Link } from "react-router-dom";

import AProject1 from "../assets/aenonFile/Porfolio.png";
import AProject2 from "../assets/aenonFile/Masskara.png";
import AProject3 from "../assets/aenonFile/Codecup.png"
import AProject5 from "../assets/aenonFile/garudagear.png"
import AProject6 from "../assets/aenonFile/Crane Game.png"

import GPoster1 from "../assets/aenonFile/sksks.png";
import GPoster2 from "../assets/aenonFile/362537558_786406079834108_8395257090740567931_n.png";
import Gposter3 from "../assets/aenonFile/red manok.png";
import Gposter4 from "../assets/aenonFile/aenon (1).png";

import HTML from "../assets/tech-editors-icons/html.png";
import Javasctipt from "../assets/tech-editors-icons/javascript.png";
import linkIcon from "../assets/link-solid.svg";
import PHP from "../assets/tech-editors-icons/php.png"



import Html from "../assets/tech-editors-icons/html.png";
import Css from "../assets/tech-editors-icons/css.png";
import ReactJs from "../assets/tech-editors-icons/react.png";
import Tailwind from "../assets/tech-editors-icons/tailwind.png";
import Bootstrap from "../assets/tech-editors-icons/bootstrap.png";
import Php from "../assets/tech-editors-icons/php.png";
import NodeJs from "../assets/tech-editors-icons/nodejs.png";

/*editors*/
import Figma from "../assets/tech-editors-icons/figma.png";
import Photoshop from "../assets/tech-editors-icons/vecteezy_photoshop-icon-vector-illustration_13403706-removebg-preview 1.png";
import Illustrator from "../assets/tech-editors-icons/vecteezy_adobe-illustrator-logo_13403705-removebg-preview 1.png";
import VsCode from "../assets/tech-editors-icons/vscode.png";
import Canva from "../assets/tech-editors-icons/vecteezy_canva-software-logo_31712153-removebg-preview 1.png";

function Aenon() {
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
          <img src={AenonPic} alt="" className="max-w-[450px] w-full" />
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
                    Aenon Montoya Hipolito
                  </span>
                  , Born in Paranaque City, Metro Manila Lives in Bacolod City,
                  Negros Occidental. As an aspiring web
                  developer I always wanted to improve my skills and work hard
                  to excel at my course and for my future, as the day past i
                  learned that discipline and proper mindset will help you to
                  improve, and give up is not an option for me since I am
                  motivated to accomplish my dreams and goals.
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
                  Landing Page Design
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-3 justify-center green-gradient w-[13%] rounded"></div>
                <h1 className={`${styles.textHead} paragraphFont`}>
                  Hardware Repair
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
                Student Council Grade 12 Representative S.Y 2017-2018
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-3 justify-center violet-gradient w-[10%] rounded"></div>
              <h1 className={`${styles.textHead} paragraphFont`}>
                PSG Board Member  S.Y 2022-2023
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-3 justify-center green-gradient w-[13%] rounded"></div>
              <h1 className={`${styles.textHead} paragraphFont`}>
                CHS NCII Passer
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-3 justify-center blue-gradient w-[25%] rounded"></div>
              <h1 className={`${styles.textHead} paragraphFont`}>
                Fastfood Crew
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-9 md:mt-24 mt-16">
          <Link
            to="https://www.instagram.com/srmntnn"
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
            to="https://www.facebook.com/aenononi"
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

        <div className="autogrid md:autogridTwo md:gap-6 gap-5 md:mt-24 mt-12">
          <div className="bg-[#03000C] md:px-12 px-5 md:py-14 py-10 rounded-xl shadow-xl">
            <div className="flex justify-center flex-col gap-2 text-center items-center">
              <h1
                className={`${styles.subHead} customFont pink-text-gradient w-fit font-semibold`}
              >
                Tools for Development
              </h1>
              <h1
                className={`${styles.textHead} paragraphFont text-secondary w-fit font-light`}
              >
                These are the tools that we use for development.
              </h1>

              <div className="flex flex-1 flex-wrap gap-4 w-full justify-center mt-6">
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Javasctipt} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Javascript
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Html} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Html
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Css} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Css
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={ReactJs} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    ReactJs
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Tailwind} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Tailwind
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Bootstrap} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    Bootstrap
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Php} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    PHP
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={NodeJs} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    NodeJs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#03000C] md:px-12 px-5 md:py-14 py-10 rounded-xl shadow-xl h-fit">
            <div className="flex justify-center flex-col gap-2 text-center items-center">
              <h1
                className={`${styles.subHead} customFont pink-text-gradient w-fit font-semibold`}
              >
                Tools for Editing
              </h1>
              <h1
                className={`${styles.textHead} paragraphFont text-secondary w-fit font-light`}
              >
                These are the tools that we use for editing.
              </h1>

              <div className="flex flex-1 flex-wrap gap-4 w-full justify-center mt-6">
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={VsCode} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>
                    VScode
                  </p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Figma} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>Figma</p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Photoshop} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>Photoshop</p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Illustrator} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}>Illustrator</p>
                </div>
                <div className="flex gap-2 items-center custom-gradient px-6 py-2 rounded-md font-extralight custom-shadow">
                  <img className="h-8" src={Canva} alt="" />
                  <p className={`${styles.textHead} paragraphFont text-white`}></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1
          className={`${styles.sectionSubHeadText} md:mt-16 mt-12 md:mb-10 mb-8 paragraphFont font-extralight pink-text-gradient w-fit`}
        >
          My Projects.
        </h1>
        <div className=" gap-x-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 justify-center">
          <div className="relative overflow-hidden  max-w-[100%] w-full flex flex-col justify-center items-center gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={AProject3} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                CodeCup
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>A Web project for our Database subject.</p>

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
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={PHP} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    PHP
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
              <p className={`${styles.textHead} paragraphFont`}>A personal porfolio created for fun.</p>

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


          <div className="relative overflow-hidden  max-w-[100%] w-full flex flex-col justify-center items-center gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={AProject5} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                GarudaGear Clone
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>A Web project for our Web Application subject.</p>

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
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={ReactJs} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    ReactJS
                  </p>
                </div>
                <div className="border-[1px] px-4 py-2 flex items-center justify-center border-secondary gap-3 rounded-lg w-fit ">
                  <img src={NodeJs} alt="" className="h-4" />
                  <p
                    className={`${styles.iconText} text-secondary paragraphFont font-thin`}
                  >
                    NodeJs
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
                Masskarra Website
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>A commissioned project from a student that contained information
                about masskara festival.</p>

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

          <div className="relative overflow-hidden max-w-[100%] w-full flex flex-col gap-4">
            <div className=" bg-primary md:p-6 rounded-lg shadow-xl">
              <img src={AProject6} alt="" className="rounded-lg" />
            </div>
            <div className="bg-primary p-6 rounded-lg shadow-xl flex flex-col">
              <h1 className={`${styles.subHead} paragraphFont text-white`}>
                Claw Machine Game
              </h1>
              <p className={`${styles.textHead} paragraphFont`}>A Game that i created for fun.</p>

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
                  to="https://ulapcrane.vercel.app/"
                  target="_Blank"
                  className="h-full w-full flex items-center justify-center"
                >
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
              to="/gracien"
              className="flex items-center justify-center "
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <p
                className={`${styles.textHead} text-white paragraphFont text-center`}
              >
                Gracien
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

export default Aenon;
