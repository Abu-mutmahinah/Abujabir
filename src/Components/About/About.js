import cumm from "../../images/cummunication.png";
import group from "../../images/Group.png";

const About = () => {
  return (
    <div id="About" className="pb-20">
      <div className="mt-10 lg:grid grid-cols-4 px-10">
        <div className=" col-span-2">
          <h1 className="text-5xl text-blue-700  font-bold">
            We Provide Awesome Services
          </h1>

          <p className=" mt-10 mr-5 font-bold text-gray-600 text-lg  ">
            Certain things are hard but making payments shouldn't be one of
            them. ABU JABIR DATA HUB provides you with the services you enjoy
            right from the comfort of your home or office. The experience of
            total convenience,fast service delivery and easy payment is just at
            your fingertips
          </p>
        </div>
        <div></div>
        <div>
          <img src={cumm} alt="" className="w-[400px] " />
        </div>
      </div>

      <div className="lg:grid grid-cols-2 mt-20 px-10">
        <img src={group} alt="" className="h-[300px]" />
        <div>
          <h1 className="text-5xl text-blue-700  font-bold pb-10 mt-20 lg:mt-0">
            Why Choose Us?
          </h1>
          <p className="font-bold text-gray-600 text-lg ">
            We offer instant recharge of Airtime, Data bundle, CableTV (DStv,
            GOtv & Startimes), Electricity Bill Payment and more...
          </p>
          <div className="font-bold text-gray-600 text-lg mt-10">
            <p>~ We are fast</p>
            <p>~ We are Online</p>
            <p>~ We are 100% Secure</p>
            <p>~ We are Reliable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
