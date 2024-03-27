import React from "react";
import HotelList from "./HotelList";
import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";

function HomePage() {
  return (
    <>
      <HomePageHeader />
      <HotelList />
      <HomePageFooter />
    </>
  );
}

export default HomePage;
