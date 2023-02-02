import React from "react";
import { useParams } from "react-router-dom";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import { items } from "../cartItems";
import { motion } from "framer-motion";
import cartSlice from "./State/Slice/CartSlice";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));
  const { name, price, image } = item;
  return (
      <motion.div 
      className="min-h-screen w-full flex items-center justify-center p-4"
      initial={{opacity: 0.5}}
      animate={{opacity: 1}}
      exit={{opacity: 0.5}}
      transition={{duration: 0.5, ease: "easeOut"}}
      >
        <div className="lg:flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="lg:w-[28rem] md:w-[24rem] w-[22rem] ml-[-30px] mr-12"
          />
          <div>
            <div className="text-3xl font-extrabold mb-4">{name}</div>
            <div className="mb-4">${price}</div>
            <p className="max-w-[400px] mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique recusandae reiciendis, ad iure accusantium magni,
              quisquam nisi asperiores incidunt quibusdam dolores deleniti.
              Fugiat, nisi magnam.
            </p>
            <button
              className="bg-black text-white py-1 px-3"
              onClick={() => dispatch(add(item))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </motion.div>
  );
};

export default ItemDetails;
