
import CategoryMarque from "../../componenets/HomeComponent/CategoryMarque";
import Marquee from "react-fast-marquee";
import ProductSection from "../../componenets/HomeComponent/ProductSection";

function Home() {
  return (
    <div className="px-4">
      <Marquee pauseOnHover="true">
        <CategoryMarque />
      </Marquee>
      <ProductSection />
    </div>
  );
}

export default Home;
