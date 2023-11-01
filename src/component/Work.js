import React from "react";
import "./work.css";
// import { Link } from 'react-router-dom'
// import vid1 from '../images/secsatu.mp4'
import gif2 from "../images/gif2.webp";
import sxcw from "../images/sxcweb.jpg";
import barunw from "../images/barunw.jpg";
import krea from "../images/krea.jpg";
import tridi from "../images/tridi.jpg";
import lestari from "../images/lestari.jpg";
import sicepat from "../images/sicepat.jpg";
import hw from "../images/hw.jpg";
import yarsi from "../images/yarsi.jpg";
import byja from "../images/byja.jpg";
import cs from "../images/cs.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";

const Work = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
      <div className="flex w-full lg:w-1/3 items-center justify-center sp">
        <p
          className="w-60 text-lg font-medium text-center lg:text-left lg:w-40 opacity-0 lg:opacity-100 fixed"
          id="bio"
        >
          <strong>hi, im Arkan</strong>  Product Designer // UI/UX Designer // 3D Artist // Motion Designer
        </p>
        <div className="flex w-full h-auto z-50 lg:flex-row md:flex-row flex-col justify-center md:space-x-5 items-start md:items-center ml-12 lg:ml-0 translate-y-48 lg:space-x-20 lg:translate-y-0 lg:items-end lg:mb-24 lg:translate-x-80  space-y-8 lg:space-y-20 lg:mt-0">
          <div
            className="flex-col  text-left space-y-2 lg:space-y-5 lg:-translate-y-4"
            id="yuai"
          >
            <h1 className="aaa lg:text-4xl text-2xl lg:mb-8 font-semibold w-max lg:w-72">
              UI/UX Design
            </h1>
            <h3 className="aaa tombol2 lg:text-xl text-black w-max">
              <a
                href="https://medium.com/@arkanaulia/ui-ux-case-study-lestari-pembelajaran-tarian-daerah-dengan-gamifikasi-memanfaatkan-motion-d5056e528943"
                target="_blank"
              >
                Lestari
              <div>
                <img src={lestari} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl text-black w-max">
              <a
                href="https://medium.com/@arkanaulia/ui-ux-case-study-tridi-in-build-your-own-3d-662c6439696f"
                target="_blank"
              >
                Tridi.in
              <div>
                <img src={tridi} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl text-black w-max">
              <a
                href="https://docs.google.com/presentation/d/1kxCNfpprFId4nu8hKcwFT9Sm2NdK-eYQ/edit?usp=sharing&ouid=113715505474865789810&rtpof=true&sd=true"
                target="_blank"
              >
                Krealogi
              <div>
                <img src={krea} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl text-black w-max">
              <a href="https://sxceosleague.com/" target="_blank">
                StudentXCEOs League
              
              <div>
                <img src={sxcw} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl text-black w-max">
              <a href="http://barunastra.its.ac.id/" target="_blank">
                Barunastra
              <div>
                <img src={barunw} alt="" />
              </div>
              </a>
            </h3>
          </div>
          <div
            className="flex-col text-left space-y-2 lg:space-y-5 lg:ml-10 w-max md:-translate-y-4"
            id="mosien"
          >
            <h1 className="aaa lg:text-4xl text-2xl lg:mb-8 font-semibold w-max">
              3D Design
            </h1>
            <h3 className="aaa tombol2 lg:text-xl  text-black w-max">
              <a
                href="https://www.behance.net/gallery/128075297/SiCepat-Advertisement-Concept"
                target="_blank"
              >
                Si Cepat for XD Kreativ
                <div>
                <img src={sicepat} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl  text-black w-max">
              <a
                href="https://www.behance.net/gallery/128075013/Holywings-Slaughter-Advertisement-Concept"
                target="_blank"
              >
                Holywings for XD Kreativ
              <div>
                <img src={hw} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl  text-black w-max">
              <a
                href="https://youtube.com/playlist?list=PLyrr-56zMxf5sbiWAIuQ-K0pZlBW0oulv"
                target="_blank"
              >
                Yarsi’s Event Bumper
              <div>
                <img src={yarsi} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl  text-black w-max">
              <a
                href="https://www.behance.net/gallery/134013257/BYJA-Advertisement?"
                target="_blank"
              >
                BYJA Perfume Advertisement
              <div>
                <img src={byja} alt="" />
              </div>
              </a>
            </h3>
            <h3 className="aaa tombol2 lg:text-xl  text-black w-max">
              <a
                href="https://www.behance.net/gallery/134013345/Sanitizer-Case"
                target="_blank"
              >
                Sanitizer Case by C.S.
              <div>
                <img src={cs} alt="" />
              </div>
              </a>
            </h3>
          </div>
        </div>
        <a href="https://www.behance.net/arkanauliaf" target="_blank">
          <h1
            className="fixed right-16 -translate-y-12 text-lg text-gray-500 lg:left-20 lg:translate-y-48 hover:underline hover:text-black"
            id="simor"
          >
            see more.
          </h1>
        </a>
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center lg:translate-x-0 -z-50 -translate-y-48 lg:translate-y-0 ">
        <img
          src={gif2}
          alt="gif"
          className="flex items-center w-max  lg:opacity-100"
          id="giff"
        />
      </div>
      <div className="flex w-full lg:w-1/3 -translate-y-40 lg:translate-y-0 items-center justify-center">
        <div
          className="w-max flex lg:flex-col lg:space-y-3 -translate-y-2 lg:translate-y-0 lg:space-x-0 space-x-3 text-gray-400 lg:text-3xl text-2xl  opacity-0 lg:opacity-100"
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
      </div>
    </div>
  );
};

export default Work;
