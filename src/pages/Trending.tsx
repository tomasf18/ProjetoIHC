import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import HairpageM from "../components/trends/HairrankingpageM";
import HairpageF from "../components/trends/HairrankingpageF";
import Buttongroup from "../components/trends/Buttongroup";
import { SetStateAction, useState } from "react";

export default function Trending() {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = (buttonNumber: SetStateAction<number>) => {
    setSelectedButton(buttonNumber);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div
          className="flex-grow bg-gray-100 pl-8 pr-8"
          style={{ paddingTop: "60.8px" }}
        >
          <p className="text-5xl text-center mt-5">Trending Haircuts</p>
          <div className="h-20"></div>
          <div className="flex  justify-center">
            <Buttongroup
              buttonNumber={selectedButton}
              onButtonClick={handleButtonClick}
            />
          </div>
          <div className="h-10"></div>
          <div id="masculino" className={`flex justify-center ${selectedButton === 1 ? '' : 'hidden'}`}>
            <HairpageM />
          </div>
          <div id="feminino" className={`flex justify-center ${selectedButton === 2 ? '' : 'hidden'}`}>
            <HairpageF />
          </div>
          <div className="mt-20"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
