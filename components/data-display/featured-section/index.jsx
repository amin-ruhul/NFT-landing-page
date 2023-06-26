import FeaturedCard from "../card/featured-card";

function FeaturedSection() {
  return (
    <section className="px-[30px] lg:px-[120px] bg-[#d9e0ec33]  pt-[4.063rem] pb-[6.5rem]">
      <h3 className="mb-[3.438rem] font-integral text-[1.75rem]">
        Collection Featured NFTs
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </section>
  );
}

export default FeaturedSection;
