import Image from "next/image";
import PageLoader from "@/components/ui/PageLoader";
import Header from "@/components/layouts/Header";
import BannerSlider from "@/components/sections/home/BannerSlider";
import WeeklySale from "@/components/sections/home/WeeklySale";
import ShopBySelect from "@/components/sections/home/ShopBySelect";
import ShortCategoryLeft from "@/components/sections/home/ShortCategoryLeft";
import ShortCategoryRight from "@/components/sections/home/ShortCategoryRight";
import BeforeAfterEffect from "@/components/sections/home/BeforeAfterEffect";
import ShopByCategory from "@/components/sections/home/ShopByCategory";
import GiftBirthDay from "@/components/sections/home/GiftBirthDay";
import InfoStatusBanner from "@/components/sections/home/InfoStatusBanner";
import HeaderStart from "@/components/partials/HeaderStart";
export default function Home() {
  return (
    <>
    {/* <HeaderStart /> */}
    <BannerSlider />
    <ShopBySelect />
    <ShortCategoryLeft />
    <ShortCategoryRight />
    <BeforeAfterEffect />
    <ShopByCategory />
    <GiftBirthDay />
    <InfoStatusBanner />
    
    </>
  );
}
