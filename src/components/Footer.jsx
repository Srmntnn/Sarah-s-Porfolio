import React from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import Linkin from "../assets/linkedin.svg"

function Footer() {
  return (
    <section className="bg-primary">
      <div
        className={`${styles.paddingX} max-w-screen-2xl mx-auto w-full  items-center gap-5 pt-20 md:mt-32 mt-20`}
      >
        <footer className="footer footer-center p-10 text-base-content rounded ">
          <nav className="grid grid-flow-col gap-4">
            <Link to="/gracien" className="link link-hover">
              <p className={`${styles.iconText} paragraphFont`}>Gracien</p>
            </Link>
            <Link to="/aenon" className="link link-hover">
              <p className={`${styles.iconText} paragraphFont`}>Aenon</p>
            </Link>
          </nav>
          <div className="flex gap-4 w-full justify-center flex-wrap">
            <nav className="flex flex-col gap-3 items-center justify-center bg-[#03000C] px-4 py-8 rounded-xl shadow-xl max-w-[250px] w-full">
              <p className={`${styles.iconText} paragraphFont text-white`}>
                Gracien's Socials
              </p>
              <div className="grid grid-flow-col gap-4">
                <a
                  href="https://www.instagram.com/cupcake.ggwp/"
                  target="_Blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                    className="fill-current"
                    id="instagram"
                  >
                    <path
                      d="M5.41421,1.17157c1.17157,1.17157 1.17157,3.07107 0,4.24264c-1.17157,1.17157 -3.07107,1.17157 -4.24264,0c-1.17157,-1.17157 -1.17157,-3.07107 -8.88178e-16,-4.24264c1.17157,-1.17157 3.07107,-1.17157 4.24264,-8.88178e-16"
                      transform="translate(4.707 4.707)"
                    ></path>
                    <path d="M11.5,0h-7c-2.48145,0 -4.5,2.01855 -4.5,4.5v7c0,2.48145 2.01855,4.5 4.5,4.5h7c2.48145,0 4.5,-2.01855 4.5,-4.5v-7c0,-2.48145 -2.01855,-4.5 -4.5,-4.5Zm-3.5,12c-2.20557,0 -4,-1.79395 -4,-4c0,-2.20605 1.79443,-4 4,-4c2.20557,0 4,1.79395 4,4c0,2.20605 -1.79443,4 -4,4Zm4.5,-8c-0.276123,0 -0.5,-0.223877 -0.5,-0.5c0,-0.276184 0.223877,-0.5 0.5,-0.5c0.276123,0 0.5,0.223816 0.5,0.5c0,0.276123 -0.223877,0.5 -0.5,0.5Z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/cupcake.ggwp/"
                  target="_Blank"
                >
                 <img src={Linkin} alt="" className="h-6" />
                </a>
                <a href="https://www.youtube.com/@ShiiinYT" target="_Blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/yenssshin" target="_Blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>

            <nav className="flex flex-col gap-3 items-center justify-center bg-[#03000C] px-4 py-8 rounded-xl shadow-xl  max-w-[250px] w-full">
              <p className={`${styles.iconText} paragraphFont text-white`}>
                Aenon's Socials
              </p>
              <div className="grid grid-flow-col gap-4">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </nav>
          </div>
          <aside>
            <p className={`${styles.iconText} paragraphFont`}>
              Copyright © 2024 - All right reserved by Aenon & Gracien
            </p>
          </aside>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
