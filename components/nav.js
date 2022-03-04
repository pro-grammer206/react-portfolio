import React from "react";
import Link from "next/link";

const nav = () => {
  return (
    <header>
      <nav className="font-bold font-mono uppercase mt-2 text-white bg-cyan-500 text-lg flex justify-between gap-2 p-2 shadow-md w-3/4 mx-auto rounded-md">
        <p>My Page</p>
        <div>
          <Link href="/">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/">magical</Link>
        </div>
      </nav>
    </header>
  );
};

export default nav;
