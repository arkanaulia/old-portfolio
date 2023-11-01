import React from "react";
import "./exp.css";
// import { Link } from 'react-router-dom'
// import vid1 from '../images/secsatu.mp4'
import gif3 from "../images/gif3.webp";
import paragon from "../images/paragon.jpg";
import iysre from "../images/iysre.jpg";
import sch from "../images/sch.jpg";
import sxc from "../images/sxc.jpg";
import expo from "../images/expo.jpg";
import ilits21 from "../images/ilits21.jpg";
import gerigi from "../images/gerigi.jpg";
import ic from "../images/ic.jpg";
import xd from "../images/xd.jpg";
import barun from "../images/barun.jpg";
import tiket from "../images/tiket.png";

import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";

const Exp = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
      <div className="flex w-full lg:w-1/3 items-center justify-center z-50">
        <p
          className="w-60 text-lg font-medium text-center lg:text-left z-50 lg:w-40"
          id="bio"
        >
          <strong>hi, im Arkan</strong>  Product Designer // UI/UX Designer // 3D Artist // Motion Designer
        </p>
      </div>

      <div className="flex w-full lg:w-1/3 items-center justify-center -z-50 lg:translate-y-0 translate-y-56">
        <img
          src={gif3}
          alt="gif"
          className="flex items-center w-max -z-50"
          id="giff2"
        />
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <div
          className="w-max flex translate-x-48 lg:translate-x-80 lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 text-gray-400 lg:text-3xl text-2xl opacity-0 lg:opacity-100"
          id="logoo"
        >
          <a
            className="transition hover:text-gray-800"
            href="https://www.linkedin.com/in/arkanaulia/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="transition hover:text-gray-800"
            href="https://www.instagram.com/arkanaulia/"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            className="transition hover:text-gray-800"
            href="https://www.github.com/arkanaulia/"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            className="transition hover:text-gray-800"
            href="https://www.behance.net/arkanauliaf"
            target="_blank"
          >
            <BsBehance />
          </a>
        </div>

        <div className="flex w-full lg:flex-row md:flex-row flex-col justify-start items-center lg:items-end lg:mb-24 lg:-translate-x-80 space-y-7 lg:space-y-20 -translate-y-56 lg:translate-y-0 lg:mt-0">
         
          <div
            className="flex-col text-left space-y-2 lg:space-y-5 w-96"
            id="yuai"
          >
            <h1 className="aaa lg:text-4xl text-2xl lg:mb-8 mb-4 font-semibold">
              Selected Experience
            </h1>
            <h3 className="aaa tombol lg:text-xl text-sm text-black w-max">
              <a
                href="https://tiket.com/"
                target="_blank"
              >
                Tiket.com
                <p className="lg:text-sm text-xs">Product Designer (3D Illustrator) intern</p>
                <div>
                  <img src={tiket} alt="" />
                </div>
              </a>
            </h3>
            <h3 className="aaa tombol lg:text-xl text-sm text-black w-max">
              <a
                href="https://peerleaders.id/"
                target="_blank"
              >
                Barunastra Roboboat Team
                <p className="lg:text-sm text-xs">Branding and Media Manager</p>
                <div>
                  <img src={barun} alt="" />
                </div>
              </a>
            </h3>
            <h3 className="aaa tombol lg:text-xl text-sm text-black w-max">
              <a
                href="https://peerleaders.id/"
                target="_blank"
              >
                IPL by Paragon
                <p className="lg:text-sm text-xs">Production manager</p>
                <div>
                  <img src={paragon} alt="" />
                </div>
              </a>
            </h3>
            <h3 className="aaa tombol lg:text-xl text-sm link link-underline link-underline-black text-black w-max">
              <a
                href="https://www.instagram.com/iysre2021/?hl=en"
                target="_blank"
              >
                IYSRE 2021
                <p className="lg:text-sm text-xs">Production manager</p>
                <div>
                  <img src={iysre} alt="" />
                </div>
              </a>
            </h3>
            <h3 className="aaa tombol lg:text-xl text-sm link link-underline link-underline-black text-black w-max">
              <a
                href="http://petrolida.its.ac.id/"
                target="_blank"
              >
                Petrolida 2022
                <p className="lg:text-sm text-xs">Media Production Coordinator</p>
                <div>
                  <img src={sch} alt="" />
                </div>
              </a>
            </h3>
            <h3 className="aaa tombol lg:text-xl text-sm link link-underline link-underline-black text-black w-max">
              <a href="https://sxceosleague.com/" target="_blank">
                SxCEOs League<p className="lg:text-sm text-xs">Head of Web Design</p>
                <div>
                  <img src={sxc} alt="" />
                </div>
              </a>
            </h3>
            <h3 className="aaa tombol lg:text-xl text-sm link link-underline link-underline-black text-black w-max">
              <a
                href="https://www.instagram.com/xdkreativ_/?hl=en"
                target="_blank"
              >
                XD Collective<p className="lg:text-sm text-xs">3D Designer Intern</p>
                <div>
                  <img src={xd} alt="" />
                </div>
              </a>
            </h3>
            
          </div>
          <a href="https://www.linkedin.com/in/arkanaulia/" target="_blank">
            <h1
              className="lg:fixed md:-translate-y-20 text-lg text-gray-500 lg:-left-0 lg:translate-y-12 hover:underline hover:text-black"
              id="simor"
            >
              see more.
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Exp;
