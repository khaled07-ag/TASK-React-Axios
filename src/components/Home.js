import React from "react";
import Modal from "./Modal";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="w-screen h-[100vh] bg-[#F9E3BE] flex flex-col justify-center items-center md:flex-row font-mono">
      <h1 className="text-center text-[60px] ">
        Welcome to theeeee best pets shop
      </h1>
      <img
        src="https://img.freepik.com/premium-vector/cute-petshop-logo-with-cat-dog_454510-56.jpg"
        alt="Pets image logo"
      />
    </div>
    <Modal/>
    </>
  );
};

export default Home;
