import React from "react";
import CategoryMarque from "../../componenets/HomeComponent/CategoryMarque";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <React.Fragment>
      <Marquee pauseOnHover="true">
        <CategoryMarque />
      </Marquee>
    </React.Fragment>
  );
}

export default Home;
