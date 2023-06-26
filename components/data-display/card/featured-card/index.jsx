import React from "react";
import Image from "next/image";
import SecondaryButton from "@/components/data-input/button/secondary-btn";
import PropTypes from "prop-types";

function FeaturedCard({ featuredData }) {
  const { mainImageUrl, subImages, user } = featuredData;

  return (
    <article>
      <div className="flex justify-between">
        <div className="w-[77%] relative">
          <Image
            src={mainImageUrl}
            fill
            alt="crypto-image"
            sizes="33vw"
            className="rounded-[0.813rem] object-cover"
          />
        </div>
        <div className="w-[20%] space-y-[0.516rem]">
          {subImages.map((imageData) => (
            <div className=" relative w-full h-[85px]" key={imageData.id}>
              <Image
                src={imageData.imageUrl}
                fill
                alt="crypto-image"
                sizes="33vw"
                className="rounded-[0.813rem] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="text-[1.25rem] font-bold mt-[1.813rem]">
        Amazing Collection
      </p>
      <div className="flex items-center justify-between mt-[0.688rem]">
        <div className="flex items-center space-x-2">
          <Image
            src={user.imageUrl}
            width={28}
            height={28}
            className="rounded-full"
            alt={user.name}
          />
          <small className="text-[0.875rem] font-medium">by {user.name}</small>
        </div>
        <SecondaryButton
          btnText="Total 54 Items"
          className="py-[0.545rem] px-[.85rem] text-[0.688rem]"
        />
      </div>
    </article>
  );
}

FeaturedCard.propTypes = {
  featuredData: PropTypes.shape({
    mainImageUrl: PropTypes.string,
    subImages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        imageUrl: PropTypes.string,
      })
    ),
    user: PropTypes.shape({
      name: PropTypes.string,
      imageUrl: PropTypes.string,
    }),
  }),
};

export default FeaturedCard;
