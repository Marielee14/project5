import React from "react";
import { PageHOC } from "../components";

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-5xl p-3">Avax Gods</h1>
      <h2 className="text-3xl p-3">Web3 NFT Battle-style Card Game</h2>
      <p className="text-xl p-3">Made with 💜 by JavaScript Mastery</p> */}
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods
    <br /> a web3 NFT Card Game
  </>,
  <>Create your own batter and Fight till death</>
);