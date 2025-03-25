import { InfiniteMovingCardsDemo } from "../democomponents/InfiniteMovingCardDemo";
import { CardHoverEffectDemo } from "../democomponents/CardHoverEffectDemo";
import { FlipWordsDemo } from "../democomponents/FlipWordsDemo";
import Pricing from "../components/blogitup/price";
import { PricingTable } from "../components/blogitup/Pricing-table";
import { Chart } from "../components/blogitup/Chart";

const MainPage = () => {
  return (
    <div className="">
      <FlipWordsDemo />
      <CardHoverEffectDemo />
      <InfiniteMovingCardsDemo />
      <Pricing />
      <PricingTable />
      <div className="p-20">
        <h2 className="text-5xl md:text-7xl font-normal text-neutral-600 dark:text-neutral-400 mb-6 ">
          Recent <span className="text-purple-500">Activity</span>
        </h2>
        <div className="mt-12">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
