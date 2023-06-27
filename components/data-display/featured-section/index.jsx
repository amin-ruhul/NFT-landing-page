import FeaturedCard from "../card/featured-card";
import { featuredList } from "@/utils/data/featuredList";

function FeaturedSection() {
  return (
    <section className="px-[1rem] lg:px-[7.5rem] bg-[#d9e0ec33]  pt-[4.063rem] pb-[6.5rem]">
      <h3 className="mb-[3.438rem] font-integral text-[1.75rem]">
        Collection Featured NFTs
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {featuredList.map((featuredData) => (
          <FeaturedCard key={featuredData.id} featuredData={featuredData} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;
