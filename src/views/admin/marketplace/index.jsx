import Banner from "./components/Banner";

import NftCard from "components/card/NftCard";

const Marketplace = () => {
  return (
    <div className="mt-3 grid h-full w-full grid-cols-1 gap-1 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="h-fit w-full xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        <Banner />

        {/* NFt Header */}
        <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div>

        {/* NFTs trending card */}
        <div className="z-20 grid grid-cols-4 gap-5 md:grid-cols-4">
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Trendy Clothes"
            price="0.91"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.7"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.7"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.7"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.7"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.7"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Clothes grape"
            price="2.91"
            image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
        </div>

        {/* Recenlty Added setion */}
        <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            All Products
          </h4>
        </div>

        {/* Recently Add NFTs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.91"
            image="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.91"
            image="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
          <NftCard
            discountpercentage="10"
            size="xl"
            category="men"
            rating="4.4"
            mrp="34"
            color="black"
            model="xyc"
            productid="DSHBHBSBDG5366"
            title="Aswin Trendz"
            price="0.91"
            image="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
