import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="h-[710px] bg-gray-500 items-center relative">
      <div className="absolute lg:left-[100px] top-[200px] lg:top-[250px]">
        <div className="lg:text-5xl text-3xl ml-5 font-bold flex gap-3">
          <h1 className="text-white text-center">
            Welcome To <span className="text-blue-700">ABU JABIR</span> DATA HUB
            !
          </h1>{" "}
        </div>

        <p className="pt-10 text-lg px-3 font-semibold uppercase lg:max-w-[900px] text-gray-200">
          A technology platform that offers solutions to digital needs, Contact
          Us for your Airtime, Data Bundle Subscription for All networks and
          Cable Payment AT BEST POSSIBLE PRICE WITHOUT COMPROMISING QUALITY.
        </p>

        <a href="https://wa.me/234903639739">
          <button className="ml-5 text-2xl bg-white text-gray-500 px-5 py-1 rounded shadow-lg mt-20 font-bold flex items-center gap-2">
            <IoChatbubbleEllipsesOutline />

            <h1>MESSAGE US</h1>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
