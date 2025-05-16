import BannerSlider from "@/components/sections/home/BannerSlider";
import OfferBanner from "@/components/sections/home/OfferBanner";
import DealsOfTheDay from "@/components/sections/home/DealsOfTheDay";
import BrandsAndOffers from "@/components/sections/home/BrandsAndOffers";
import ShopByCategory from "@/components/sections/home/ShopByCategory";
import ShopByConcern from "@/components/sections/home/ShopByConcern";
import StatusBanner from "@/components/sections/home/StatusBanner";
export default function Home() {
  return (
    <>
    <BannerSlider />
    <OfferBanner />
     <DealsOfTheDay />
    <BrandsAndOffers />
    <ShopByCategory />
     {/* <ShopByConcern /> */}
    <StatusBanner />
    </>
  );
}
