import React from "react";
import NavBar from "../../components/NavBar/NavBar";
const Home = () => {
  return (
    <div>
      <NavBar />
      <main className=" flex items-center justify-between">
        <div>
          <p>REGISTER</p>
          <h1>ONLINE BANKING</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            sapiente doloribus ipsam, doloremque fuga nobis debitis voluptas
            molestiae culpa vel dolor, a itaque veniam perspiciatis nam
            accusantium iure aperiam nihil.
          </p>
          <div>
            <a
              href="#"
              className=" mr-4 rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Register
            </a>
            <a
              href="#"
              className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Log In
            </a>
          </div>
        </div>
        <div>{/*<img src={}/> */}</div>
      </main>
    </div>
  );
};

export default Home;
