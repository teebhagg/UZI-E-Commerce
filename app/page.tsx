import { client } from "@/sanity/client";
import PrimaryBanner from "./components/banners/primary_banner";
import MyFooter from "./components/footer";
import NavBar from "./components/navbar";
import ProductCard from "./components/product_card";
import SecondaryBanner from "./components/banners/secondary_banner";
import TestCard from "./components/tests/card";
import {
  ProductInterface,
  generateDummyProducts,
} from "./utils/interfaces/product_interface";
import ProductCardSkeleton from "./components/skeletons/card_skeleton";
import Loading from "./loading";
import { Suspense } from "react";
import { connectToDB } from "./utils/database/database";

export default async function Home() {
  // const { banners, products } = await getStoreData();

  // console.log(banners[0]);

  const products = generateDummyProducts();
  return (
    <main className="home h-full flex flex-col">
      <NavBar />
      <Suspense fallback={<Loading/>}>
        <section className="flex-grow">
          <PrimaryBanner />
          <div className="container mx-auto mb-4 px-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                images={product.images}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
          <SecondaryBanner />
          <div className="container mx-auto mb-4 px-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          </div>
        </section>
      </Suspense>
      <MyFooter />
    </main>
  );
}

export const getStoreData = async () => {
  const productQuery = "*[_type == 'product']";
  const products: ProductInterface[] = await client.fetch(productQuery);

  const bannerQuery = "*[_type == 'banner']";
  const banners: [] = await client.fetch(bannerQuery);

  return { products, banners };
};
