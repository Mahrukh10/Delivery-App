"use client";
import Box from "./box";
export default function Delivery() {
  return (
    <div className="min-h-screen text-center">
      <h1 className="text-2xl font-bold pt-8 text-[#008992]">
        Welcome to Delivery System
      </h1>
      <h3 className="text-1xl font-bold text-[#889761]">
        Choose your Preference
      </h3>
      <div
        id="boxes"
        className="flex justify-center items-center mt-6 h-[80vh] flex-wrap"
      >
        <div className="">
          {" "}
          <Box title={`IN_STORE`}/>
        </div>
        <div className=" ml-2">
          {" "}
          <Box title={`DELIVERY`}/>
        </div>
        <div className=" ml-2">
          {" "}
          <Box title={`CURBSIDE`}/>
        </div>
      </div>
    </div>
  );
}
