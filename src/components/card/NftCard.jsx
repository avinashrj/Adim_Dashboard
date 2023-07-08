import { useState } from "react";
import Card from "components/card";

const NftCard = ({
  title,
  price,
  image,
  extra,
  productid,
  productdescription,
  discountpercentage,
  category,
  model,
  size,
  color,
  rating,
  mrp,
}) => {
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${extra}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
        </div>

        <div className=" flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700 dark:text-white">
              {" "}
              {title}{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Discount % : {discountpercentage}
          </p>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Product Desc : {productdescription}
          </p>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Product id : {productid}
          </p>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Category : {category}
          </p>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Model : {model}
          </p>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Size : {size}
          </p>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Color : {color}
          </p>
        </div>
        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
            Rating : {rating}
          </p>
        </div>

        <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
              Price : {price} <span>$</span>
            </p>
          </div>
          <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
            <p className="mb-4 pl-2  text-sm font-bold text-brand-500 dark:text-white">
              MRP : {mrp} <span>$</span>
            </p>
          </div>
          <button
            href=""
            className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
          >
            Details
          </button>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
