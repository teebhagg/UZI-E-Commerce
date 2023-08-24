import TestCard from '@/app/components/tests/card'
import React from 'react'

export default function CategoryProducts() {
  return (
    <section className="flex-grow">
        {/* <PrimaryBanner /> */}
        <div className="container mx-auto mb-4 px-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {/* {products.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              images={product.images}
              name={product.name}
              price={product.price}
            />
          ))} */}
        </div>
        {/* <SecondaryBanner /> */}
        <div className="container mx-auto mb-4 px-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
          <TestCard />
        </div>
      </section>
  )
}
