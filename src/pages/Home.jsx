import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div
      className={` h-full p-4 flex items-center  w-full flex-col overflow-y-auto`}
    >
      <div className="flex flex-col pt-14   gap-y-16 items-center w-max">
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
          className="w-[504px] h-[693px] p-9 "
        />
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/produce-1587636290.png?resize=1200:*"
          alt="veggiesimg"
          className="h-[480px] w-[780px]  "
        />
      </div>
      <div className="flex gap-x-8 w-full p-9">
        <p
          className=" w-1/3 flex justify-center font-semibold text-base"
          style={{
            fontFamily: "Inter",
          }}
        >
          WHAT WE BELIEVE
        </p>

        <div
          className=" w-1/2 font-normal text-xl"
          style={{
            fontFamily: "Inter",
          }}
        >
          <p>We believe in produce. Tasty produce. Produce like:</p>

          <br />
          <p>
            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas.
            Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants.
            Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli.
            Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries.
            Raspberries. Cilantro. Parsley. Dill.
          </p>

          <br />
          <p> What are we forgetting?</p>
          <br />
          <p>
            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
            Persian cucumbers, in addition to aforementioned “normal” cucumbers.
            Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call
            pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk
            fruit. Fruit of the Loom. Fruits of our labor (this website).
            Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes.
            Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we
            swear, we’re vendors of organic produce, but if you asked us to
            describe what escaroles are...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
