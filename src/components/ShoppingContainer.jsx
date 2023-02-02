import React from 'react';
import { items } from '../cartItems';
import ShoppingItems from './ShoppingItems';

export default function ShoppingContainer() {
  return (
    <div className='mx-12 my-12 grid lg:grid-cols-3 md:grid-cols-2 gap-x-20'>
        {items.map((item => {
            return (
                <ShoppingItems key={item.id} item={item}/>
            )
        }))}
    </div>
  )
};
