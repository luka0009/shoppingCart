import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "./state/slice/cartSlice";

export default function ShoppingItems({ item }) {
  const dispatch = useDispatch();
  const { id, image, price, name } = item;
  return (
    <div className="pb-3 border-b-2 border-slate-800 cursor-pointer overflow-visible">
      <Link to={`/ItemDetails/${id}`}>
      <div className=" bg-white h-[220px] flex flex-col items-center justify-center overflow-visible">
        {/* <div className="mb-5 -mt-9 font-semibold text-xl">Shopify</div> */}
        <img src={image} alt={name} className='transition duration-1000 w-[220px] hover:scale-[1.18]  mb-[-50px]'/>
      </div>
      </Link>
      <div className="mt-6 px-4 flex justify-center items-center">
        <div>
            <div>
                <div className="text-sm font-semibold mb-3">{name}</div>
                <div className="text-xl font-semibold">${price}</div>
                <button onClick={() => dispatch(add(item))}className="bg-slate-800 hover:bg-slate-900 font-semibold text-cyan-500 px-3 my-2 border-2 border-cyan-500">Add To Cart</button>
            </div>
        </div>
      </div>
    </div>
  );
}
