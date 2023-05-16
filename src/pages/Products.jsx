import React from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
const Products = () => {
  const items = [
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRySmsWS1STEbeGh72PUoHGkk2wS7UKH0C4jQ&usqp=CAU",
      title: "Heirloom tomato",
      rateperlb: "$5.99/lb",
      grownIn: "Grown in San Juan Capistrano, CA",
    },
    {
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFtmmeCab3BwNu3YbIy6_WbiCbJJSyV9PcQ&usqp=CAU",
      title: "Organic ginger",
      rateperlb: "$12.99/lb",
      grownIn: "Grown in Huntington Beach, CA",
    },
  ];
  return (
    // wrap
    <div className="w-full h-full flex flex-col px-24">
      {/* top */}
      <div className="flex gap-x-6 font-normal items-center justify-between border-b-2 border-gray-300">
        {/* title */}
        <div className="flex items-baseline gap-x-6 ">
          <h1
            className="text-6.5xl font-normal"
            style={{
              fontFamily: "Newsreader",
            }}
          >
            Produce
          </h1>
          <p
            className=" font-bold"
            style={{
              fontFamily: "Inter",
            }}
          >
            Fresh{" "}
            <span className="text-gray-500 font-thin ">— August 21, 2023</span>
          </p>
        </div>
        {/* buttons */}
        <div className="flex gap-x-2 ">
          <Button name={"Default"} radius="rounded-3xl" />
          <Button
            name={"A-Z"}
            bgColor="bg-white"
            textColor="text-black"
            radius="rounded-3xl"
            border="border border-grey "
          />
          <Button
            name={"List view"}
            bgColor="bg-white"
            textColor="text-black"
            radius="rounded-3xl"
            border="border border-grey "
          />
          {/* <p className="border-2 rounded-full h-10 w-16 flex items-center p-4">
            A-Z
          </p>
          <p className="border-2 rounded-full h-10 w-26 flex items-center p-4">
            List view
          </p> */}
        </div>
      </div>
      {/* bottom */}
      <div className="flex gap-x-8 mt-8">
        {items.map((item, i) => {
          return <ProductCard item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Products;
