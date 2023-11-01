import React from "react";
import "./hi.css";
import gif6 from "../images/gif6.webp";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";

const Hi = () => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <p
          className="w-60 text-lg font-medium text-center lg:text-left lg:w-40"
          id="bio2"
        >
          <strong>hi, im Arkan</strong> Product Designer // UI/UX Designer // 3D
          Artist // Motion Designer
        </p>
      </div>
      <div className="flex w-full lg:w-1/3 items-center justify-center flex-col -translate-y-16 lg:translate-y-0 -z-50">
        <img
          src={gif6}
          alt="gif"
          className="flex items-center w-max "
          id="giff3"
        />
      </div>
      <p
        className="w-8/12 fixed z-30 translate-y-36 text-xs text-justify lg:text-base"
        id="bioku"
      >
        i'm <strong>Arkan Aulia</strong> a designer focused on
        fusing eye-pleasing and problem-solving for an improved user experience.
        I experienced on creating visual design and user centered design, such
        as UI design, 3D design, motion graphics, graphics design, prototyping,
        frameworking, research methods and evaluation. I studying at informatics
        engineering Institut Teknologi Sepuluh Nopember. My college help me to
        improving my tactical abilities and critical thinking. It is also help
        me to understand developer mindset for my design
      </p>

      <div
        class="fixed text-gray-300 translate-y-3 lg:translate-y-56  w-max h-max z-50"
        id="imel"
      >
        <a
          href="mailto:arkanaulia@gmail.com"
          class="button button--winona p-0 m-10 lg:mb-5 bg-black hover:bg-gray-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-xs text-center font-semibold uppercase tracking-widest align-middle overflow-hidden z-50"
          data-text="work with me."
        >
          <span class="align-middle block">work with me.</span>
        </a>
      </div>

      <div className="flex w-full lg:w-1/3 items-center justify-center">
        <div
          className="w-max flex lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 text-gray-400 lg:text-3xl text-2xl"
          id="logoo2"
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

export default Hi;
