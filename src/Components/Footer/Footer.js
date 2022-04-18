const Footer = () => {
  return (
    <div className="bg-blue-800 px-5 lg:flex justify-around text-gray-200 py-5">
      <div>
        <h1 className="mb-10 mt-5 text-2xl font-bold text-gray-200 uppercase underline">
          Contact Information
        </h1>
        <div className="font-semibold text-xl">
          <p>Address: Kwara, Nigeria.</p>
          <p>Email: isiaqsofiyullahi@gmail.com</p>
          <p>Phone: +234903639739</p>
        </div>
      </div>

      <div>
        <h1 className="mb-10 mt-5 text-2xl font-bold text-gray-200 uppercase underline">
          Payment Information
        </h1>
        <div className="font-semibold text-xl">
          <p>Bank: Jaiz Bank</p>
          <p>AcctNum: 005880443</p>
          <p>AcctName: ISIAQ SOFIYULLAHI OLADIMEJI</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
