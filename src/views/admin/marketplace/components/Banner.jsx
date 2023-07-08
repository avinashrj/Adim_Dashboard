import nft1 from "assets/img/products/NftBanner1.png";
import React from "react";

const Banner1 = () => {
  return (
    <div
      className="flex  flex-col rounded-[20px] bg-cover py-[30px] pl-[30px] md:px-[64px] md:py-[56px]"
      style={{ backgroundImage: `url(${nft1})` }}
    >
      <div className="  ">
        <h4 className="mb-[14px] max-w-full text-xl font-bold text-white md:w-[64%] md:text-3xl md:leading-[42px] lg:w-[46%] xl:w-[85%] 2xl:w-[75%] 3xl:w-[52%]">
          Upload the products
        </h4>
        <p className="mb-[40px] max-w-full text-base font-medium text-[#E3DAFF] md:w-[64%] lg:w-[40%] xl:w-[72%] 2xl:w-[60%] 3xl:w-[45%]">
          choose the files and start uploading the new products into your
          website
        </p>
        <div className="flex ">
          <input
            type="file"
            name="image-file"
            id="image-file"
            accept="image/jpeg , image/jpg"
            className="rounded-xl border-none text-white"
            multiple
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Name"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Product Description"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Cost Price"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Profit Percentage"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Quantity"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Model"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Size"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Color"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="MRP"
            className=" mt-5 rounded-lg px-2 py-1 pr-24 text-base font-normal "
          />
        </div>
        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-xl bg-white px-4 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70">
            Upload Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
