import React from "react";
import { PageHOC } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {

  return  (
  <div>
    <h1 className="text-xl text-white"></h1>
  </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to Avax Gods
    <br /> a web3 NFT Card Game
  </>,
  <>Connect your game with your wallet</>
);
