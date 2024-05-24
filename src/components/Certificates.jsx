import React from "react";
import { styles } from "../style";
import GCert from "../assets/gracienFile/Screenshot2022-12-11-001042.png";
import Gcert2 from "../assets/gracienFile/Screenshot-2022-12-11-001117.png"
import Gcert3 from "../assets/gracienFile/Screenshot2022-12-11-001137.png"
import Gcert4 from "../assets/gracienFile/Screenshot2022-12-11-001456.png"

import ACert from "../assets/aenonFile/AWIT.png"
import ACert1 from "../assets/aenonFile/Building.png"
import ACert2 from "../assets/aenonFile/HIPOLITO 1.png"
import ACert3 from "../assets/aenonFile/page02.jpg"
import ACert4 from "../assets/aenonFile/page196.jpg"
import ACert5 from "../assets/aenonFile/page28.jpg"
import ACert6 from "../assets/aenonFile/page49.jpg"


function Certificates() {
  return (
    <div
      className={`${styles.paddingX} max-w-screen-2xl mx-auto relative items-center gap-5 pt-20`}
    >
      <div
        className={`paragraphFont flex flex-col mt-20`}
      >
        <p
          className={`${styles.sectionSubText} pink-text-gradient w-fit `}
        >
          Certificates
        </p>
        <h1 className={`${styles.heroHeadText} customFont`}>
          OUR CERTIFICATES.
        </h1>
        <p
          className={`${styles.sectionSubText} max-w-[850px] w-full `}
        >
          In the digital world, certificates act as trusted credentials, similar
          to passports, verifying the identity of websites and individuals
          online.
        </p>
      </div>

      <div className="md:autogridTwo autogrid gap-8 md:mt-16 mt-12">
        <div className="carousel">
          <div id="slide1" className="carousel-item relative w-full bg-cover">
            <img src={GCert} className="w-full" />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slide4" className="btn btn-circle shadow-xl">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle shadow-xl">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={Gcert2}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full bg-cover">
            <img
              src={Gcert3}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={Gcert4}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>

        <div className="carousel">
          <div id="slideOne" className="carousel-item relative w-full">
            <img src={ACert} className="w-full" />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slideSix" className="btn btn-circle shadow-xl">
                ❮
              </a>
              <a href="#slideTwo" className="btn btn-circle shadow-xl">
                ❯
              </a>
            </div>
          </div>
          <div id="slideTwo" className="carousel-item relative w-full">
            <img
              src={ACert1}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slideOne" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideThree" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slideThree" className="carousel-item relative w-full">
            <img
              src={ACert2}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slideTwo" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideFour" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slideFour" className="carousel-item relative w-full">
            <img
              src={ACert3}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slideThree" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideFive" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slideFive" className="carousel-item relative w-full">
            <img
              src={ACert4}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slideFour" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideSix" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slideSix" className="carousel-item relative w-full">
            <img
              src={ACert5}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slideFive" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideSeven" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slideSeven" className="carousel-item relative w-full">
            <img
              src={ACert6}
              className="w-full"
            />
            <div className="absolute flex justify-between bottom-8 w-full px-8">
              <a href="#slideSix" className="btn btn-circle">
                ❮
              </a>
              <a href="#slideOne" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
