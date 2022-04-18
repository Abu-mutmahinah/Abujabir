import MTN from "../../images/MTN.png";
import AIRLEL from "../../images/AIRTEL.png";
import GLO from "../../images/GLO.png";
import MOBILE from "../../images/9MOBILE.png";
const Service = () => {
  return (
    <div id="Service" className="bg-gray-400 pt-20 ">
      <h1 className="text-center text-4xl font-bold uppercase text-blue-700 ">
        Affordable Data Plans And Prices
      </h1>
      <div className="lg:flex justify-around sm:ml-0 sm pt-20 align-center lg:mr-20">
        <img src={MTN} alt="" className="ml-32 shadow-xl mb-4 lg:mb-0" />
        <img src={AIRLEL} alt="" className="ml-32 shadow-xl" />
        <img src={GLO} alt="" className="ml-32 shadow-xl" />
        <img src={MOBILE} alt="" className="ml-32 shadow-xl" />
      </div>
      <div className="text-center">
        <button className="bg-gray-200 px-3 py-1 rounded shadow-xl text-xl font-semibold my-10 lg:ml-10 text-gray-700">
          MESSAGE US!
        </button>
      </div>
    </div>
  );
};

export default Service;
