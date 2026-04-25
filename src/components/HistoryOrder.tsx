import React from 'react';
import numeral from "numeral";
import { ASSETS_BASE } from '@/lib/api';
import { orderHistory } from '@/types/model';

type PropsType = {
    cartItem: orderHistory;
    cur?:any
};

export default function HistoryOrder({ cartItem , cur}: PropsType) {
    const { name, price, id , image, imagePath, quantity, promo_price,  } = cartItem;
    // Format prices
    const real_price = numeral(promo_price).format('0.00');
    const actual_price = numeral(price).format('0.00');
    const qty = numeral(quantity).format('0')
    // Construct image URL
    const imageUrl = image ?? imagePath ?? '';

    return (
        <>
            <div className="flex flex-row justify-between w-full px-3 py-1 mt-1">
                {/* Item information (image, name, price, promo_price) */}
                <div className='flex flex-row items-center space-x-4'>
                    {/* Image */}
                    <div className='h-[62px] w-[62px] rounded-lg overflow-hidden'>
                        <img src={imageUrl} alt={name} width={1000} height={1000} className="object-cover w-full h-full" />
                    </div>
                    {/* Item details (name, price, promo_price) */}
                    <div>
                        <p className='font-battambong text-sm'>{name}</p>
                        <div className="space-x-3">
                            <span className='text-orange-600 font-bold'>{cur}{promo_price ? real_price : actual_price}</span>
                            {
                                promo_price && promo_price != price ? <span className="line-through">${ actual_price}</span> : (<></>)
                            }
                        </div>
                    </div>
                </div>
                {/* Quantity */}
                <div className='flex flex-row items-center space-x-2'>
                    <p>X{qty}</p>
                </div>
            </div>
            {/* Divider */}
            <div className='h-[1px] w-full mt-1 bg-gray-200'></div>
        </>
    );
}