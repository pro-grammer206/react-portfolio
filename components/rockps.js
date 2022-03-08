import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const rockps = () => {
  const [choice, setChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [fresult, setFresult] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    computeResult();
  }, [choice, compChoice]);

  const options = ["rock.svg", "paper.svg", "scissor.svg"];
  const result = (user, comp) => {
    if (user === "rock.svg") {
      if (comp === "paper.svg") {
        setScore(score--);
        return "comp wins";
      } else if (comp === "scissor.svg") {
        setScore(++score);
        return "You win";
      } else {
        return "it's a draw";
      }
    }
    if (user === "paper.svg") {
      if (comp === "scissor.svg") {
        setScore(--score);
        return "comp wins";
      } else if (comp === "rock.svg") {
        setScore(++score);
        return "You win";
      } else return "it's a draw";
    }
    if (user === "scissor.svg") {
      if (comp === "rock.svg") {
        setScore(--score);
        return "comp wins";
      } else if (comp === "paper.svg") {
        setScore(++score);
        return "You win";
      } else return "it 's a draw";
    }
  };
  const computeResult = () => {
    if (choice) {
      setCompChoice(options[Math.floor((Math.random() * 10) % 2)]);
    }
    console.log("compute result called");
    if (choice && compChoice) {
      console.log(choice, compChoice);
      const fresult = result(choice, compChoice);
      setFresult(fresult);
    }
  };
  const handleClick = (e) => {
    if (e.target.src.includes("paper")) {
      setChoice("paper.svg");
    } else if (e.target.src.includes("rock")) {
      setChoice("rock.svg");
    } else {
      setChoice("scissor.svg");
    }
  };
  return (
    <div>
      <h2 className="text-center uppercase font-bold">Rock paper Scissor</h2>
      <section className="mx-auto flex gap-2 justify-center p-3">
        <Image
          src="/paper.svg"
          width={50}
          height={50}
          data-src="paper"
          className=" w-12 hover:w-32 focus:bg-white"
          onClick={handleClick}
        />
        <Image
          src="/rock.svg"
          width={50}
          height={50}
          className="focus:scale-150"
          onClick={handleClick}
        />

        <Image
          src="/scissor.svg"
          width={50}
          height={50}
          className="focus:scale-150"
          onClick={handleClick}
        />
      </section>
      <section className="flex-col justify-center gap-5 border-2  mx-auto rounded-md p-2 shadow-lg ">
        <div className="flex gap-5 justify-center p-2 align-middle">
          <p className="text-2xl ">Player 1</p>
          {choice && <Image src={"/" + choice} width={50} height={50} />}
        </div>
        <div className="w-2 h-2/3 bg-white"></div>
        <div className="flex gap-5 justify-center p-2 align-middle">
          <p className="text-2xl ">Computer</p>
          {compChoice && (
            <Image src={"/" + compChoice} width={50} height={50} />
          )}
        </div>
      </section>
      <section className="flex-col justify-center border-2 mt-2 rounded-md p-2 shadow-lg ">
        {fresult && (
          <p className="text-center text-2xl font-bold font-mono">{fresult}</p>
        )}
        <p className="text-center font-bold text-xl m-2 border-2 w-1/2 mx-auto rounded-md">
          Score : {score}
        </p>
        <button
          className="bg-cyan-400 rounded-lg font-bold p-2 w-1/2 hover:bg-cyan-500  "
          onClick={() => setScore(0)}
        >
          Reset
        </button>
      </section>
    </div>
  );
};

export default rockps;
