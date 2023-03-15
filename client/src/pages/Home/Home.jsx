import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import HeroIMG from "../../assests/Illustration1Clear.png";
const Home = () => {
  return (
    <div>
      <NavBar />
      <main className="flex justify-center mt-12">
        <div className="w-[88vw] h flex items-center justify-between font-display">
          <div className="flex flex-col">
            <p className="font-extrabold text-4xl">REGISTER</p>
            <h1 className="font-extrabold text-4xl">ONLINE BANKING</h1>
            <p className="font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
              sapiente doloribus ipsam, doloremque fuga nobis debitis voluptas
              molestiae culpa vel dolor, a itaque veniam perspiciatis nam
              accusantium iure aperiam nihil.
            </p>
            {/* <div className="mt-4">
              <a
                href="#"
                className=" mr-4 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Register
              </a>
              <a
                href="#"
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                Log In
              </a>
            </div>
          */}
          </div>
          <div className="hidden md:block md:max-w-4xl">
            <img classname="" src={HeroIMG} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
