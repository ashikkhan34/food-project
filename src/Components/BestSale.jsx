import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BestSale() {
  return (
    <div className="flex justify-center gap-6 mb-8 ">
      <div className="best-sale h-[350px] w-[540px] ">
        <div className="mt-20 ml-20">
          <p className="text-white">100% Organic</p>
          <h1 className="font-semibold text-4xl text-white">
            Fruit & Vegetable
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-white">Starting at : </p>
            <button className="btn bg-amber-400 text-white ">$11.99</button>
          </div>
          <button className="btn bg-green-600 border-none px-12 py-4 mt-6 text-white rounded-full flex items-center">
            Shop now <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="best-sale2 h-[350px] w-[540px]">
        <div className=" mt-20 ml-10">
          <p className="text-white">100% Organic</p>
          <h1 className="font-semibold text-4xl text-white">
            Fruit & Vegetable
          </h1>

          {/* For TSX uncomment the commented types below */}
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-3 text-white ">
            <div className="flex flex-col x">
              <span className="countdown font-mono text-xl">
                <span
                  style={{ "--value": 15 } /* as React.CSSProperties */}
                  aria-live="polite"
                //   aria-label={counter}
                >
                  15
                </span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-xl">
                <span
                  style={{ "--value": 10 } /* as React.CSSProperties */}
                  aria-live="polite"
                //   aria-label={counter}
                >
                  10
                </span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-xl">
                <span
                  style={{ "--value": 24 } /* as React.CSSProperties */}
                  aria-live="polite"
                //   aria-label={counter}
                >
                  24
                </span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-xl">
                <span
                  style={{ "--value": 59 } /* as React.CSSProperties */}
                  aria-live="polite"
                //   aria-label={counter}
                >
                  59
                </span>
              </span>
              sec
            </div>
          </div>

          <button className="btn bg-green-400 border-none px-12 py-6 mt-6 text-white rounded-full flex items-center">
            Shop now <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
