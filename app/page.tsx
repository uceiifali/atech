import CompanyLogos from "@/Components/CompanyLogos";
import DealsOfTheDaySection from "@/Components/DealsOfTheDaySection";
import HomeBannerSection from "@/Components/HomeBannerSection";
import TopSellingCategory from "@/Components/TopSellingCategory";
import TopSellingHome from "@/Components/TopSellingHomeScall";

export default function Home() {
  return (
    <main className="">
      <HomeBannerSection />
      <CompanyLogos />
      <TopSellingHome />
      <DealsOfTheDaySection />
      <TopSellingCategory />
    </main>
  );
}
