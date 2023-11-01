import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import gif1 from "./images/gif1.webp";
import gif4 from "./images/gif5.webp";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBehance } from "react-icons/bs";
import Work from "./component/Work";
import Exp from "./component/Exp";
import Hi from "./component/Hi";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixed w-full ">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src={logo}
                className="m-10 lg:m-14 lg:ml-32 md:ml-9"
                alt=""
              />
            </Link>{" "}
            <Link
              to="/hi"
              className=" w-max m-10 lg:mr-32 md:mr-9 text-xl transition ease-in-out link link-underline link-underline-black"
            >
              Grab a tea ?
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <div className="fixed w-full bottom-0">
          <div className="flex justify-between items-center">
            <Link
              to="/exp"
              className="w-max m-10 lg:ml-32 ml-9 text-xl transition ease-in-out link link-underline link-underline-black"
            >
              experience.{" "}
            </Link>{" "}
            <a href="https://arkanaulia.super.site/" target="_blank"
              className="w-max m-10 lg:mr-32 mr-9 text-xl transition ease-in-out link link-underline link-underline-black"
            >
              work.{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex justify-center items-center lg:flex-row flex-col  h-screen">
                <div className="flex w-full lg:w-1/3 items-center justify-center">
                  <p className="w-60 text-lg font-medium text-center lg:text-left lg:w-40">
                  <strong>hi, im Arkan</strong>  Product Designer // UI/UX Designer // 3D Artist // Motion Designer
                  </p>{" "}
                </div>{" "}
                <div
                  className="w-full lg:w-max md:w-max -z-30 translate-y-6  lg:translate-y-0"
                  id="introo"
                >
                  <img
                    src={gif4}
                    alt="gif"
                    className="flex items-center w-max "
                  />
                </div>{" "}
                <div
                  className="flex w-full lg:w-1/3 -z-40 items-center justify-center"
                  id="intro2"
                >
                  <img
                    src={gif1}
                    alt="gif"
                    className="flex items-center w-full p-11"
                  />
                </div>{" "}
                <div className="flex w-full lg:w-1/3 items-center justify-center">
                  <div className="w-max flex lg:flex-col lg:space-y-3 lg:space-x-0 space-x-3 text-gray-400 transition  lg:text-3xl text-2xl">
                    <a
                      className="transition hover:text-gray-800"
                      href="https://www.linkedin.com/in/arkanaulia/"
                      target="_blank"
                    >
                      <BsLinkedin />
                    </a>{" "}
                    <a
                      className="transition hover:text-gray-800"
                      href="https://www.instagram.com/arkanaulia/"
                      target="_blank"
                    >
                      <BsInstagram />
                    </a>{" "}
                    <a
                      className="transition hover:text-gray-800"
                      href="https://www.github.com/arkanaulia/"
                      target="_blank"
                    >
                      <BsGithub />
                    </a>{" "}
                    <a
                      className="transition hover:text-gray-800"
                      href="https://www.behance.net/arkanauliaf"
                      target="_blank"
                    >
                      <BsBehance />
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            }
          ></Route>{" "}
          <Route path="/work" element={<Work />} />{" "}
          <Route path="/exp" element={<Exp />} />{" "}
          <Route path="/hi" element={<Hi />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;
