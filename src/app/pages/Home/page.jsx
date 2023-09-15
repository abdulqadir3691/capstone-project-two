import HeroSec from "@/app/sections/Herosec/HeroSec";
import React from "react";
import Reviews from "@/app/sections/Reviews/Reviews";
import BestOfferCard from "@/app/sections/BestOffer/BestOfferCard";
import TopCatagory from "@/app/sections/TopCatagory/CarouselComponent";
import FollowUs from "@/app/sections/FollowUs/FollowUS";
import Productsdata from "@/app/sections/ProductsData/Productsdata";
import FeatureProductsList from "@/app/sections/ProductsList/FeatureProductsList";

const HomePage = () => {
  return (
    <div>
      
      <HeroSec />
      <Productsdata />
      <FeatureProductsList />
      <TopCatagory />
      <BestOfferCard />
      <Productsdata />
      <Reviews />
      <FollowUs />
    </div>
  );
};

export default HomePage;
