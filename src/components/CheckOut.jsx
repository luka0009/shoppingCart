import React from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { open } from "./state/slice/checkoutSlice";
import { useSelector } from "react-redux";
import CheckOutItems from "./CheckOutItems";
import { clear } from "./state/slice/cartSlice";
import { motion } from 'framer-motion';

export default function CheckOut() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
//   const filteredItems = cartItems.filter((item, index, self) =>
//   index === self.findIndex(t => t.id === item.id)
// );
  return (
    <motion.div 
    className="bg-transparentBlack z-30 w-full top-0 left-0 fixed h-screen"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0.5}}
    transition={{duration: 0.5, ease: "easeOut"}}
    >
      <div className="h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div
              onClick={() => dispatch(open())}
              className="flex items-center cursor-pointer"
            >
              <HiChevronLeft />
              <span className="font-semibold select-none">
                Continue Shopping
              </span>
            </div>
            <div>Shopping Bag ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="uppercase text-center text-3xl">
                Your cart is empty
              </div>
            ) : (
              <>
                {cartItems?.map((cartItem) => {
                  return (
                    <CheckOutItems key={cartItem.id} cartItem={cartItem} />
                  );
                })}
                <div className="flex justify-between items-center mt-12">
                  <div className="font-bold">
                    Total Cost: ${total.toFixed(2)}
                  </div>
                  <HiTrash 
                  onClick={() => dispatch(clear())}
                  className="cursor-pointer transition duration-1000 hover:scale-125 hover:opacity-90 text-3xl"
                  />
                </div>
                <div className="p-3 mt-8 text-center cursor-pointer bg-black text-white">
                  Checkout
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
