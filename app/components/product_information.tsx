"use client";

import { FormEvent, FormEventHandler, useState } from "react";
import { ProductInterface } from "../utils/interfaces/product_interface";
import { CartInterface } from "../utils/interfaces/cart_interface";
import { useAppDispatch, useAppSelector } from "../utils/hooks/redux_hooks";
import {
  addToCart,
  updateOrderItemCount,
} from "../utils/redux/slices/cart_reducer";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

export default function ProductInformation({
  product,
}: {
  product: ProductInterface;
}) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const { data: session, status, update } = useSession();

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeSelection = (size: string) => {
    setSelectedVariant(size);
  };

  const handleQuantitySelection = (quantity: number) => {
    setSelectedQuantity(quantity);
  };

  // Reset states
  const resetSelection = () => {
    setSelectedColor(null);
    setSelectedVariant(null);
    setSelectedQuantity(1);
  };

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  // add products to cart
  const addProductToCart:
    | FormEventHandler<HTMLFormElement>
    | undefined = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if ( session === null) return toast.error("")
    const url = process.env.NEXTAUTH_URL!;
    if (selectedColor && selectedQuantity && selectedVariant) {
      const orderInfo: CartInterface = {
        _id: product._id,
        image: product.images[0],
        name: product.name,
        color: selectedColor,
        variant: selectedVariant,
        quantity: selectedQuantity,
        price: product.price * selectedQuantity,
      };

      const existingOrder = cart.find((order) => order._id === orderInfo._id);

      if (existingOrder !== null && existingOrder !== undefined) {
        let newQuantity = existingOrder.quantity! + orderInfo.quantity!;
        let newPrice = existingOrder.price! + orderInfo.price!;
        dispatch(
          updateOrderItemCount({
            ...orderInfo,
            quantity: newQuantity,
            price: newPrice,
          })
        );
      } else {
        dispatch(addToCart(orderInfo));
        resetSelection();
      }

      if (session && session.user) {
        console.log(url);
        let res = await fetch(
          `http://localhost:3000/api/cart/${session.user.email}`,
          { method: "PUT", body: JSON.stringify(cart) }
        );
        let data = await res.json();
        console.log(data);
      }
      toast.success("Added to Cart");
    }
  };

  return (
    <div className="sticky top-0">
      {/* Item Status */}
      <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
        New
      </strong>

      <div className="mt-8 flex justify-between">
        <div className="max-w-[35ch] space-y-2">
          {/* Product Name */}
          <h1 className="text-xl font-bold sm:text-2xl">{product.name}</h1>

          <p className="text-sm">Highest Rated Product</p>

          {/* Rating */}
          <div className="-ms-0.5 flex">
            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <svg
              className="h-5 w-5 text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <p className="text-lg font-bold">GH₵ {product.price}</p>
      </div>

      {/* Description */}
      <div className="mt-4">
        <div className="prose max-w-none">
          <p>{product.description}</p>
        </div>

        {/* More of the Description */}
        {/* <button className="mt-2 text-sm font-medium underline">
          Read More
        </button> */}
      </div>

      <form className="mt-8" onSubmit={addProductToCart}>
        {/* Colors */}
        <fieldset>
          <legend className="mb-1 text-sm font-medium">Color</legend>

          <div className="flex flex-wrap gap-1">
            <label htmlFor="color_tt" className="cursor-pointer">
              <input
                type="radio"
                name="color"
                id="color_tt"
                className="peer sr-only"
                onChange={() => handleColorSelection("Texas Tea")}
              />

              <span className="group bg-white inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                Texas Tea
              </span>
            </label>

            <label htmlFor="color_fr" className="cursor-pointer">
              <input
                type="radio"
                name="color"
                id="color_fr"
                className="peer sr-only"
                onChange={() => handleColorSelection("Fiesta Red")}
              />

              <span className="group bg-white inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                Fiesta Red
              </span>
            </label>

            <label htmlFor="color_cb" className="cursor-pointer">
              <input
                type="radio"
                name="color"
                id="color_cb"
                className="peer sr-only"
                onChange={() => handleColorSelection("Cobalt Blue")}
              />

              <span className="group bg-white inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                Cobalt Blue
              </span>
            </label>
          </div>
        </fieldset>

        {/* Sizes */}
        <fieldset className="mt-4">
          <legend className="mb-1 text-sm font-medium">Size</legend>

          <div className="flex flex-wrap gap-1">
            <label htmlFor="size_xs" className="cursor-pointer">
              <input
                type="radio"
                name="size"
                id="size_xs"
                className="peer sr-only"
                onChange={() => handleSizeSelection("XS")}
              />

              <span className="group bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                XS
              </span>
            </label>

            <label htmlFor="size_s" className="cursor-pointer">
              <input
                type="radio"
                name="size"
                id="size_s"
                className="peer sr-only"
                onChange={() => handleSizeSelection("S")}
              />

              <span className="group bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                S
              </span>
            </label>

            <label htmlFor="size_m" className="cursor-pointer">
              <input
                type="radio"
                name="size"
                id="size_m"
                className="peer sr-only"
                onChange={() => handleSizeSelection("M")}
              />

              <span className="group bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                M
              </span>
            </label>

            <label htmlFor="size_l" className="cursor-pointer">
              <input
                type="radio"
                name="size"
                id="size_l"
                className="peer sr-only"
                onChange={() => handleSizeSelection("L")}
              />

              <span className="group bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                L
              </span>
            </label>

            <label htmlFor="size_xl" className="cursor-pointer">
              <input
                type="radio"
                name="size"
                id="size_xl"
                className="peer sr-only"
                onChange={() => handleSizeSelection("XL")}
              />

              <span className="group bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-indigo-500 peer-checked:text-white">
                XL
              </span>
            </label>
          </div>
        </fieldset>

        {/* Quantity */}
        <fieldset className="mt-8">
          <legend className="mb-1 text-sm font-medium">Quantity</legend>
          <div className="mt-2 flex gap-4">
            <div>
              <label htmlFor="quantity" className="sr-only text-black">
                Qty
              </label>

              <input
                type="number"
                id="quantity"
                value={selectedQuantity}
                className="w-12 rounded border border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                onChange={(event) => {
                  handleQuantitySelection(Number(event.target.value));
                }}
              />
            </div>

            <button
              type="submit"
              className="block rounded-md bg-indigo-600 hover:bg-indigo-500 px-5 py-3 text-xs font-medium text-white">
              Add to Cart
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
