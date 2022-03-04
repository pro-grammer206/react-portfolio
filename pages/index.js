import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      animate={{
        x: 0,
        rotate: 0,
      }}
      initial={{ x: -500, rotate: -180 }}
      transition={{
        duration: 1,
        type: "spring",
      }}
      className="flex-col m-3 w-3/2 p-2  max-w-md mx-auto scroll-smooth"
    >
      <p className="text-center capitalize text-xl font-bold bg-slate-500 p-2 rounded-md text-white shadow-md max-w-sm mx-auto">
        Web developer
      </p>
      <section className=" w-3/4 mx-auto rounded-md shadow-xl p-3 m-3 max-w-md font-bold text-black">
        <p className="text-center">Web technologies used</p>
        <ul className=" w-3/4 mx-auto">
          <li>HTML</li>
          <li className="bg-gray-400 text-black font-bold p-2 shadow-md ">
            CSS
            <p className="text-center ">Css frameworks used</p>
            <ul className="list-inside list-disc text-center">
              <li>Bootstrap</li>
              <li>Tailwind</li>
              <li>Chakra ui</li>
            </ul>
            <ul className="list-disc list-inside text-center ">
              <p>React Animation library</p>
              <li className="text-center">Framer motion</li>
              <li className="text-center">Spring</li>
            </ul>
          </li>
          <li className="bg-blue-300 p-2 mt-2 rounded-md shadow-md">
            <p>Javascript</p>
            <ul className="list-inside list-disc text-center">
              Js libraries used
              <li>Jquery</li>
              <li>
                React
                <ul className="list-inside list-disc">
                  <p>React framework used</p>
                  <li>Nextjs</li>
                </ul>
              </li>
            </ul>
            <p className="text-center">Nodejs Framework used</p>
            <ul className="list-inside list-disc">
              <li className="text-center">Express js</li>
            </ul>
          </li>
        </ul>
        <div className="bg-blue-500 mt-2 mx-auto w-3/4 rounded-md p-2 shadow-md">
          <p>Version control familiar with</p>
          <ul className="list-disc w-3/4 mx-auto ">
            <li>git</li>
          </ul>
        </div>
        <div className="bg-gray-400 w-4/5 mx-auto mt-2 shadow-md rounded-md p-2 text-center">
          <p>Databases familiar with</p>
          <ul className="text-center">
            <li>MySql</li>
            <li>Mongo Db</li>
            <li>CMS used contentful</li>
          </ul>
        </div>
        <div className="text-center bg-gray-400 mt-2 rounded-md text-center">
          <h3>Operating systems used</h3>
          <p>Linux distros ubuntu </p>
          <p>Windows</p>
          <p>Basic linux commands</p>
        </div>
        <div className="text-center bg-gray-400 mt-2 rounded-md">
          <p>Programming languages worked on</p>
          <p>Java</p>
          <p>python</p>
        </div>
      </section>
    </motion.div>
  );
}
