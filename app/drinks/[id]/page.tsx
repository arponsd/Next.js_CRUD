import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const singleDrink = async (id: number) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('Failed to fetch a drink...')
  }
  const data = await response.json();
  return data;
}


const SingleDrinkPage =async ({params}: any) => {
  const singleData = await singleDrink(params.id);
  const title = singleData?.drinks[0].strDrink;
  const imgSrc = singleData?.drinks[0].strDrinkThumb;
  
  return (
    <div className="">
      <Link href='/drinks'
      className='btn btn-primary mt-8 mb-12'
      > Back to Drinks </Link>
      <h1 className='text-4xl mb-8'>{title}</h1>
      <Image
      src={imgSrc}
      height={160}
      width={160}
      alt={title}
      />

    </div>
  )
}

export default SingleDrinkPage;