import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState("shop");
  let navigate = useNavigate();
  const navList = [
    {
      title: "Shop",
      link: "shop",
    },
    {
      title: "Newstand",
      link: "newstand",
    },
    {
      title: "Who we are",
      link: "who_we_are",
    },
    {
      title: "My profile",
      link: "my_profile",
    },
  ];
  const handleBasketClick = () => {
    navigate("/cart");
  };
  return (
    <div className="flex w-full justify-between items-center px-24 py-8">
      {/* left */}
      <div
        className="text-primary font-medium text-3.5xl text-2xl hover:cursor-pointer"
        style={{
          fontFamily: "Newsreader",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        World Peas
      </div>
      {/* right */}
      <div className="flex gap-x-12 items-center hover:cursor-pointer">
        {navList.map((item) => {
          return (
            <p
              className={`${activePage === item.link && "text-primary"}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePage(item.link);
                navigate(item.link);
              }}
            >
              {item.title}
            </p>
          );
        })}

        <Button name={"Basket"} click={handleBasketClick} />
      </div>
    </div>
  );
};

export default Navbar;
