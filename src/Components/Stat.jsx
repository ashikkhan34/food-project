import React from "react";

export default function Stat() {
  return (
    <div>
      <div className="stat  h-100">
        <div className="flex justify-center gap-4 -mt-16 items-center container mx-auto">
          <div className="w-60 h-40 border bg-white/5">
            <div className="text-center justify-center items-center z-50 mt-10">
              <h1 className="text-4xl text-green-600 font-bold opacity-100">37 +</h1>
              <p className="text-sm mt-2 font-semibold text-white">Years of Hard Work</p>
            </div>
          </div>
          <div className="w-60 h-40 border bg-white/5">
            <div className="text-center justify-center items-center z-50 mt-10">
              <h1 className="text-4xl text-green-500 font-bold">500k +</h1>
              <p className="text-sm mt-2 text-white font-semibold">Happy Customer</p>
            </div>
          </div>
          <div className="w-60 h-40 border bg-white/5 ">
            <div className="text-center justify-center items-center z-50 mt-10">
              <h1 className="text-4xl text-green-500 font-bold">28</h1>
              <p className="text-sm mt-2 text-white font-semibold">Qualified Team Member</p>
            </div>
          </div>
          <div className="w-60 h-40 border bg-white/5">
            <div className="text-center justify-center items-center z-50 mt-10">
              <h1 className="text-4xl text-green-500 font-bold">750+</h1>
              <p className="text-sm text-white font-semibold">Monthly Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
