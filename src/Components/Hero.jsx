// import Typed from "react-typed";
import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-[95vh] flex justify-center content-center w-screen">
      <div className="w-full flex flex-col justify-center items-center gap-36">
        {/* <h2 className="w-96 text-center">Get your plate now!!!!</h2> */}
        <div>
          <h3>Meal of the day:</h3>
          <h4>Rice and Jerk Chicken</h4>
        </div>
        <button className="">Get your plate Now!</button>
      </div>
    </div>
  );
};

export default Hero;
