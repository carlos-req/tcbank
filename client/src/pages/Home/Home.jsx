import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroIMG from "../../assests/Illustration1Clear.png";
const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="flex justify-center mt-12">
        <div className="w-[88vw] flex  flex-col md:flex-row items-center justify-between font-display">
          <div className="flex flex-col md:w-2/5">
            <p className="font-extrabold text-4xl text-red-500 md:text-black">
              REGISTER
            </p>
            <h1 className="font-extrabold text-4xl">ONLINE BANKING</h1>
            <p className="font-normal">
              At TC Bank, we’ve created a new approach to online banking. Feel
              free to register and start your free trial.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className=" mr-4 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Register
              </a>
            </div>
          </div>
          <div className=" md:block md:w-3/5 lg:max-w-4xl">
            <img classname="" src={HeroIMG} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
