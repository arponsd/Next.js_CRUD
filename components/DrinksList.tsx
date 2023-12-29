import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DrinksList = ({drinks}:any) => {
  return (
    <ul className='menu menu-vertical pl-0'>
        {drinks.map((drink: any) => {
           return <li key={drink.idDrink}>
            <Link href={`/drinks/${drink.idDrink}`} className='text-xl font-medium'>
                {drink.strDrink}
            </Link>
           </li>
        })}
    </ul>
  )
}

export default DrinksList