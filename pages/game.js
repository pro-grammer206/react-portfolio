import React from "react";
import Game from "../components/rockps";
import { motion } from "framer-motion";

const game = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -500 }}
      className="bg-blue-400 mx-auto w-1/2 mt-5 p-2 rounded-md shadow-md max-w-md"
    >
      <Game />
    </motion.div>
  );
};

export default game;
