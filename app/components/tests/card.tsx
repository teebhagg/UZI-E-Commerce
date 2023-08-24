import Link from "next/link";

export default function TestCard() {
  return (
    <Link href="/product/1" className="group ">
      <div className="aspect-h-1 border aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <span className="inline-flex items-center rounded-lg bg-green-50 mt-4 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        New
      </span>
      <h3 className="mt-1 text-sm text-gray-700">Earthen Bottle</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
      {/* <div className="flex"> */}
        <button
          type="button"
          className="mt-2 w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm mx-auto px-5 py-2.5 mb-2">
          Add to Cart
        </button>
      {/* </div> */}
    </Link>
  );
}
