import Link from "next/link";

interface ProductCardInterface {
  _id: string;
  name: string;
  price: number;
  images: string[];
}

export default function ProductCard(props: ProductCardInterface) {
  const { _id, images, name, price } = props;
  return (
    <div>
      <Link href={`product/${_id}`} className="group">
        <div className="aspect-h-1 border aspect-w-1 w-full h-72 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={images[0]}
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <span className="inline-flex items-center rounded-lg bg-green-50 mt-4 px-3 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          New
        </span>
        <h3 className="mt-1 text-sm text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
      </Link>
        <button
          type="button"
          className="mt-2 w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm mx-auto px-5 py-2.5 mb-2">
          Add to Cart
        </button>
    </div>
  );
}

/*

  Sanity image url = urlFor(image[0]).width(200).url()

*/
