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
    <div id="tokenGated" className="w-full py-36  ">
      {walletNfts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-fit gap-24 ">
          {walletNfts.map((wNft) => (
            <div
              data-aos="zoom-in"
              class="card-container border text-center p-3 bg-white bg-opacity-80 text-black rounded-xl"
            >
              <div class="card  ">
                <div class="front  text-center flex flex-col items-center justify-center">
                  <img src={Card} alt="" className="w-48 mx-auto" />
                  <div className="pt-3 text-xl">{wNft.name}</div>
                </div>
                <div class="back text-center flex flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">About Nft</h1>
                  <p>{wNft.desc}</p>
                </div>
              </div>
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
