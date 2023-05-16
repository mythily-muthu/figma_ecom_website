import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div
      className={` h-full p-4 flex items-center justify-center w-full flex-col overflow-y-auto`}
    >
      <div className="flex flex-col  gap-y-16 items-center w-max">
        <p
          className=" font-normal italic  text-6xl  text-center  text-black "
          style={{
            fontFamily: "Newsreader",
          }}
        >
          We’re farmers, purveyors, and eaters of
          <br />
          organically grown food.
        </p>
        <Button name={"Browse our shop"} />
      </div>
      <div className="flex gap-x-15px items-center ">
        <img
          src="https://www.thegoodtrade.com/wp-content/uploads/2021/08/keeping-leafy-greens-fresh-without-plastic.jpg"
          alt="greensimg"
          className="w-[504px] h-[693px]  "
        />
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/produce-1587636290.png?resize=1200:*"
          alt="veggiesimg"
          className="h-[480px] w-[780px]  "
        />
      </div>
    </div>
  );
};

export default Home;
