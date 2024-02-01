import React from "react";
import logo from "./download.png";
import classes from './Service.module.css'
export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center px-3 md:flex">
      <div className="">
        <div className="text-center font-bold ">
          <h5 className="text-2 ">Services are</h5>
          <div className="text-[2rem] font-sans">
            <p>SERVICE</p>
          </div>
        </div>
        <div className={classes.img}>
        <div className={`${classes.img1} flex justify-center px-[5rem] text-center gap-3 py-[2rem]  md:max-sm:flex-col`}>
          <div className=" ">
            <div>
              <img src={logo} alt="images" width={40} height={30} />
            </div>
            <div>
              <h2 className="font-bold">Communication</h2>
              <div className="text-center">

              <p className="">
                this is service based company djjs ewrjwerwm wejrweiorwmwerwej
              </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src={logo} alt="images" width={40} height={30}  />
            </div>
            <div>
              <h2 className="font-bold">Communication</h2>
              <p>
                this is service based company djjs ewrjwerwm wejrweiorwmwerwej
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={logo} alt="images" width={40} height={30}  />
            </div>
            <div>
              <h2 className="font-bold">Communication</h2>
              <p>
                this is service based company djjs ewrjwerwm wejrweiorwmwerwej
              </p>
            </div>
          </div>
          </div>
          <div className={`${classes.img1} flex justify-center px-[5rem] text-center gap-3 py-[2rem]`}> 
          <div>
            <div>
              <img src={logo} alt="images" width={40} height={30} />
            </div>
            <div>
              <h2 className="font-bold">Communication</h2>
              <p>
                this is service based company djjs ewrjwerwm wejrweiorwmwerwej
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={logo} alt="images" width={40} height={30} />
            </div>
            <div>
              <h2 className="font-bold">Communication</h2>
              <p>
                this is service based company djjs ewrjwerwm wejrweiorwmwerwej
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={logo} alt="images" width={40} height={30} />
            </div>
            <div>
              <h2 className="font-bold">Communication</h2>
              <p>
                this is service based company djjs ewrjwerwm wejrweiorwmwerwej
              </p>
            </div>
          </div>
        </div>
        </div>
        <div className=" flex flex-col text-center bg-gray-300 px-[3rem] w-[100%]">
            <div className="gap-3">
                <p className="text-sl text-black font-sans font-bold mb-2"> this is web application</p>
                <button className="border-2 px-[3rem] text-white bg-black rounded-sm mb-[1rem]">Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}
