import React, { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { open } from "./state/slice/checkoutSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.checkout);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 40);
    });
  }, []);

  const Navbar = (
    <div
      className={`${
        scroll
          ? "transition duration-1000 bg-slate-800 text-cyan-500 shadow-2xl border-none"
          : ""
      } transition duration-1000 fixed top-0 left-0 w-full z-20 border-b-2 border-black`}
    >
      <div className="flex items-center justify-between relative container mx-auto py-4 px-2">
        <Link to="/">
          <div className="ml-8 font-bold text-xl">Shopify</div>
        </Link>
        <Link to="/" className="transition duration-1000">
          <div
            className="relative cursor-pointer"
            onClick={() => dispatch(open())}
          >
            <BiShoppingBag className=" mr-8 text-3xl" />
            <div className="absolute mr-8 w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white">
              {amount}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  return <div>{!isOpen && Navbar}</div>;
}
