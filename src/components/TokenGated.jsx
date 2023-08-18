import React from "react";
import Card from "../assets/singleCard.png";

const TokenGated = () => {
  const walletNfts = [
    {
      name: "The Fool",
      desc: "Life presents us with opportunities that carry risk but also the potential for great rewards. The Moonshot represents a daring adventure, a leap of faith into uncharted territories. It may be a career change, a personal goal, or an unconventional path you feel drawn to. Trust your intuition and believe in your dreams. Embrace the unknown with courage and determination. Though the journey may be challenging, the potential rewards are boundless if you dare to reach for the moon.",
    },
    {
      name: "The Magican",
      desc: "Life presents us with opportunities that carry risk but also the potential for great rewards. The Moonshot represents a daring adventure, a leap of faith into uncharted territories. It may be a career change, a personal goal, or an unconventional path you feel drawn to. Trust your intuition and believe in your dreams. Embrace the unknown with courage and determination. Though the journey may be challenging, the potential rewards are boundless if you dare to reach for the moon.",
    },
    
    {
      name: "The Empress",
      desc: "Life presents us with opportunities that carry risk but also the potential for great rewards. The Moonshot represents a daring adventure, a leap of faith into uncharted territories. It may be a career change, a personal goal, or an unconventional path you feel drawn to. Trust your intuition and believe in your dreams. Embrace the unknown with courage and determination. Though the journey may be challenging, the potential rewards are boundless if you dare to reach for the moon.",
    },
   
  ];
  return (
    <div id="tokenGated" className={`w-full py-36  ${walletNfts.length <= 3  && "md:h-screen"}`}>
      {walletNfts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-fit gap-24 ">
          {walletNfts.map((wNft) => (
            <div
              data-aos="zoom-in"
              class="card-container text-center px-3 bg-black bg-opacity-50 text-primary rounded-xl"
            >
              <div class="card">
                <div class="front  text-center flex flex-col items-center justify-center">
                  <img src={Card} alt="" className="w-48 mx-auto" />
                  <div className="pt-3 text-xl">{wNft.name}</div>
                </div>
                <div class="back text-justify flex flex-col items-center justify-center">
                  <h1 className="text-xl font-bold">About Nft</h1>
                  <p className="text-white text-sm">{wNft.desc}</p>
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
