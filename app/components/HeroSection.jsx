"use client";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="home" className="flex flex-row gap-5 md:gap-10 lg:py-16">
      <div className="flex flex-col gap-6">
        <h1 className="flex flex-col gap-6 text-center sm:text-left">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl sm:text-5xl lg:text-8xl font-bold lg:font-extrabold">
            Mutiara A&apos;yun
          </div>
          <div className="text-white lg:text-4xl sm:text-4xl text-3xl font-medium">
            a{" "}
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Frontend Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </h1>
        <p className="container text-pretty text-[#ADB7BE] text-base sm:text-lg lg:text-xl break-words">
          I&apos;m a software engineer based in Yogyakarta, Indonesia 🇮🇩.
          I&apos;m enjoying my time as a Front-end Developer. On a daily basis I
          work with Javascript, Typescript, React JS, Next JS, GraphQL, HTML &
          CSS / SCSS, Bootstrap, and Tailwind. Passionate about user experience
          and knowledgeable about UI/UX tools
        </p>
        <div>
          <Link
            href="/#contact"
            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200">
            Hire Me
          </Link>
          <Link
            href="https://drive.google.com/file/d/1rx2aoGX23cb-h_jfBldxLXgJ1YQAL5vl/view?usp=sharing"
            target="_blank"
            className="px-1 py-1 inline-block sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 mt-3 text-white">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </div>
      <div className="hidden  md:flex flex-col justify-start gap-6 pt-8 ">
        <Link
          href="https://www.linkedin.com/in/mutiaraayun/"
          target="_blank"
          rel="noreferrer"
          className="border-white border-2 hover:border-purple-400 p-2 rounded-full transition-all duration-300 hover:-translate-y-2">
          <FiLinkedin
            size="1.5rem"
            className="text-center cursor-pointer hover:text-purple-400"
          />
        </Link>
        <Link
          href="https://github.com/mayun19"
          target="_blank"
          rel="noreferrer"
          className="border-white border-2 hover:border-purple-400 p-2 rounded-full transition-all duration-300 hover:-translate-y-2">
          <FiGithub
            size="1.5rem"
            className="text-center cursor-pointer hover:text-purple-400"
          />
        </Link>
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
