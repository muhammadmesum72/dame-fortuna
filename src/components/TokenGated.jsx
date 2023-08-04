import React from "react";
import Card from "../assets/singleCard.png";

const TokenGated = () => {
  const walletNfts = [
    {
      name: "The Fool",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium adipisci cum quod error provident vero temporibus deserunt dolor corporis, magnam aliquam. Ad accusantium error quaerat repudiandae natus amet in dolore!",
    },
    {
      name: "The Magican",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium adipisci cum quod error provident vero temporibus deserunt dolor corporis, magnam aliquam. Ad accusantium error quaerat repudiandae natus amet in dolore!",
    },
    {
      name: "The Empress",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium adipisci cum quod error provident vero temporibus deserunt dolor corporis, magnam aliquam. Ad accusantium error quaerat repudiandae natus amet in dolore!",
    },
  ];
  return (
    <div className="w-full">
      {walletNfts.length > 0 ? (
        <div className="grid grid-cols-3 gap-6 items-center justify-between ">
          {walletNfts.map((wNft) => (
            <div className="border w-fit text-center p-3 bg-white bg-opacity-80 text-black rounded-xl">
              <img src={Card} alt="" className="w-48 transform perspective-none transition-transform hover:rotate-180" />
              <div className="pt-3">{wNft.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button>Connect Wallet</button>
        </>
      )}
    </div>
  );
};

export default TokenGated;
