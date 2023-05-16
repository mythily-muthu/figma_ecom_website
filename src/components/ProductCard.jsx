import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="flex flex-col border-2 rounded-3xl overflow-hidden">
      <img src={item.img_url} alt="veggie" className="h-72 w-96 object-cover" />
      <div
        className="bg-secondary h-36 p-6"
        style={{
          fontFamily: "Inter",
        }}
      >
        <p className="font-semibold text-xl">{item.title}</p>
        <p className="text-primary text-xl font-semibold">{item.rateperlb}</p>
        <p className="mt-4 font-normal text-base text-grey">{item.grownIn}</p>
      </div>
    </div>
  );
};

export default ProductCard;
