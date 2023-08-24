"use client";

import DetailsGallery from "@/app/components/details_gallery";
import ProductInformation from "@/app/components/product_information";
import { generateDummyProducts } from "@/app/utils/interfaces/product_interface";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux_hooks";
import { addToCart } from "../../utils/redux/slices/cart_reducer";
import { CartInterface } from "@/app/utils/interfaces/cart_interface";

export default function ProductDetails() {
  const params = useParams();
  const { id } = params;
  const products = generateDummyProducts();

  return (
    <div className="flex-grow">
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <DetailsGallery images={products[0].images} />
            <ProductInformation product={products[Number(id)]} />
          </div>
        </div>
      </section>
    </div>
  );
}
